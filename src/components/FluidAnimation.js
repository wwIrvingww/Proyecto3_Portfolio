"use client";
import React, { useRef, useEffect } from 'react';

const FluiAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const mouse = {
      x: 0,
      y: 0,
      px: 0,
      py: 0,
      down: false,
    };

    const canvas_width = 500;
    const canvas_height = 500;
    const resolution = 10;
    const pen_size = 40;
    const num_cols = canvas_width / resolution;
    const num_rows = canvas_height / resolution;
    const speck_count = 5000;

    const vec_cells = [];
    const particles = [];

    function init() {
      canvas.width = canvas_width;
      canvas.height = canvas_height;

      for (let i = 0; i < speck_count; i++) {
        particles.push(new Particle(Math.random() * canvas_width, Math.random() * canvas_height));
      }

      for (let col = 0; col < num_cols; col++) {
        vec_cells[col] = [];
        for (let row = 0; row < num_rows; row++) {
          const cell_data = new Cell(col * resolution, row * resolution, resolution);
          vec_cells[col][row] = cell_data;
          vec_cells[col][row].col = col;
          vec_cells[col][row].row = row;
        }
      }

      for (let col = 0; col < num_cols; col++) {
        for (let row = 0; row < num_rows; row++) {
          const cell_data = vec_cells[col][row];
          const row_up = row - 1 >= 0 ? row - 1 : num_rows - 1;
          const col_left = col - 1 >= 0 ? col - 1 : num_cols - 1;
          const col_right = col + 1 < num_cols ? col + 1 : 0;

          const up = vec_cells[col][row_up];
          const left = vec_cells[col_left][row];
          const up_left = vec_cells[col_left][row_up];
          const up_right = vec_cells[col_right][row_up];

          cell_data.up = up;
          cell_data.left = left;
          cell_data.up_left = up_left;
          cell_data.up_right = up_right;

          up.down = vec_cells[col][row];
          left.right = vec_cells[col][row];
          up_left.down_right = vec_cells[col][row];
          up_right.down_left = vec_cells[col][row];
        }
      }

      window.addEventListener('mousedown', mouse_down_handler);
      window.addEventListener('touchstart', touch_start_handler);

      window.addEventListener('mouseup', mouse_up_handler);
      window.addEventListener('touchend', touch_end_handler);

      canvas.addEventListener('mousemove', mouse_move_handler);
      canvas.addEventListener('touchmove', touch_move_handler);

      draw();
    }

    function update_particle() {
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (p.x >= 0 && p.x < canvas_width && p.y >= 0 && p.y < canvas_height) {
          const col = parseInt(p.x / resolution);
          const row = parseInt(p.y / resolution);
          const cell_data = vec_cells[col][row];
          const ax = (p.x % resolution) / resolution;
          const ay = (p.y % resolution) / resolution;

          p.xv += (1 - ax) * cell_data.xv * 0.05;
          p.yv += (1 - ay) * cell_data.yv * 0.05;
          p.xv += ax * cell_data.right.xv * 0.05;
          p.yv += ax * cell_data.right.yv * 0.05;
          p.xv += ay * cell_data.down.xv * 0.05;
          p.yv += ay * cell_data.down.yv * 0.05;

          p.x += p.xv;
          p.y += p.yv;

          const dx = p.px - p.x;
          const dy = p.py - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const limit = Math.random() * 0.5;

          if (dist > limit) {
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.px, p.py);
            ctx.stroke();
          } else {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.x + limit, p.y + limit);
            ctx.stroke();
          }

          p.px = p.x;
          p.py = p.y;
        } else {
          p.x = p.px = Math.random() * canvas_width;
          p.y = p.py = Math.random() * canvas_height;
          p.xv = 0;
          p.yv = 0;
        }

        p.xv *= 0.5;
        p.yv *= 0.5;
      }
    }

    function draw() {
      const mouse_xv = mouse.x - mouse.px;
      const mouse_yv = mouse.y - mouse.py;

      for (let i = 0; i < vec_cells.length; i++) {
        const cell_datas = vec_cells[i];
        for (let j = 0; j < cell_datas.length; j++) {
          const cell_data = cell_datas[j];
          if (mouse.down) {
            change_cell_velocity(cell_data, mouse_xv, mouse_yv, pen_size);
          }
          update_pressure(cell_data);
        }
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = '#00FFFF';
      update_particle();

      for (let i = 0; i < vec_cells.length; i++) {
        const cell_datas = vec_cells[i];
        for (let j = 0; j < cell_datas.length; j++) {
          const cell_data = cell_datas[j];
          update_velocity(cell_data);
        }
      }

      mouse.px = mouse.x;
      mouse.py = mouse.y;

      requestAnimationFrame(draw);
    }

    function change_cell_velocity(cell_data, mvelX, mvelY, pen_size) {
      const dx = cell_data.x - mouse.x;
      const dy = cell_data.y - mouse.y;
      let dist = Math.sqrt(dy * dy + dx * dx);

      if (dist < pen_size) {
        if (dist < 4) {
          dist = pen_size;
        }
        const power = pen_size / dist;
        cell_data.xv += mvelX * power;
        cell_data.yv += mvelY * power;
      }
    }

    function update_pressure(cell_data) {
      const pressure_x = (
        cell_data.up_left.xv * 0.5 +
        cell_data.left.xv +
        cell_data.down_left.xv * 0.5 -
        cell_data.up_right.xv * 0.5 -
        cell_data.right.xv -
        cell_data.down_right.xv * 0.5
      );

      const pressure_y = (
        cell_data.up_left.yv * 0.5 +
        cell_data.up.yv +
        cell_data.up_right.yv * 0.5 -
        cell_data.down_left.yv * 0.5 -
        cell_data.down.yv -
        cell_data.down_right.yv * 0.5
      );

      cell_data.pressure = (pressure_x + pressure_y) * 0.25;
    }

    function update_velocity(cell_data) {
      cell_data.xv += (
        cell_data.up_left.pressure * 0.5 +
        cell_data.left.pressure +
        cell_data.down_left.pressure * 0.5 -
        cell_data.up_right.pressure * 0.5 -
        cell_data.right.pressure -
        cell_data.down_right.pressure * 0.5
      ) * 0.25;

      cell_data.yv += (
        cell_data.up_left.pressure * 0.5 +
        cell_data.up.pressure +
        cell_data.up_right.pressure * 0.5 -
        cell_data.down_left.pressure * 0.5 -
        cell_data.down.pressure -
        cell_data.down_right.pressure * 0.5
      ) * 0.25;

      cell_data.xv *= 0.99;
      cell_data.yv *= 0.99;
    }

    function Cell(x, y, res) {
      this.x = x;
      this.y = y;
      this.r = res;
      this.col = 0;
      this.row = 0;
      this.xv = 0;
      this.yv = 0;
      this.pressure = 0;
    }

    function Particle(x, y) {
      this.x = this.px = x;
      this.y = this.py = y;
      this.xv = this.yv = 0;
    }

    function mouse_down_handler(e) {
      e.preventDefault();
      mouse.down = true;
    }

    function mouse_up_handler() {
      mouse.down = false;
    }

    function touch_start_handler(e) {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      mouse.x = mouse.px = e.touches[0].pageX - rect.left;
      mouse.y = mouse.py = e.touches[0].pageY - rect.top;
      mouse.down = true;
    }

    function touch_end_handler(e) {
      if (!e.touches) mouse.down = false;
    }

    function mouse_move_handler(e) {
      e.preventDefault();
      mouse.px = mouse.x;
      mouse.py = mouse.y;
      mouse.x = e.offsetX || e.layerX;
      mouse.y = e.offsetY || e.layerY;
    }

    function touch_move_handler(e) {
      e.preventDefault();
      mouse.px = mouse.x;
      mouse.py = mouse.y;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.touches[0].pageX - rect.left;
      mouse.y = e.touches[0].pageY - rect.top;
    }

    init();

    return () => {
      window.removeEventListener('mousedown', mouse_down_handler);
      window.removeEventListener('mouseup', mouse_up_handler);
      window.removeEventListener('mousemove', mouse_move_handler);
      window.removeEventListener('touchstart', touch_start_handler);
      window.removeEventListener('touchend', touch_end_handler);
      window.removeEventListener('touchmove', touch_move_handler);
    };
  }, []);

  return <canvas ref={canvasRef} width={500} height={500} />;
};

export default FluiAnimation;
