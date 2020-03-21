//  Unten - ein Rollenspiel im Retrodesign
//
//   Copyright (C) 2017-2018 Heiko Wolf
//
//   This program is free software; you can redistribute it and/or modify
//   it under the terms of the GNU General Public License As published by
//   the Free Software Foundation; either version 2 of the License, or
//   (at your option) any later version.
//
//   This program is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY Or FITNESS For A PARTICULAR PURPOSE.  See the
//   GNU General Public License For more details.
//
//   You should have received a copy of the GNU General Public License along
//   With this program; if not, write to the Free Software Foundation, Inc.,
//   51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
//
//   Kontakt: unten@skywave-2000.de

function c_portale () 
{ 
  this.v_portale = [];
}

c_portale.prototype.p_init = function ()
{
  this.v_img = new Image;

  for (let v_i = 1; v_i < 7; v_i++)
  {
    this.v_portale [v_i] = 0;
  }

  this.v_img.src = "daten/gfk/portale/portale.png";

  this.v_img.onload = function ()
  {
    if (v_lvl == 1)
    {
      o_portale.p_draw ();
    }
  }
}

c_portale.prototype.p_draw = function ()
{
  v_statuscanvas_context.clearRect (0, 0, 420, 420);

  if (this.v_portale [1] == 1) { v_statuscanvas_context.drawImage (this.v_img, 0, 0, 20, 20, 300, 220, 20, 20); }
  if (this.v_portale [2] == 1) { v_statuscanvas_context.drawImage (this.v_img, 20, 0, 20, 20, 320, 220, 20, 20); }
  if (this.v_portale [3] == 1) { v_statuscanvas_context.drawImage (this.v_img, 40, 0, 20, 20, 340, 220, 20, 20); }
  if (this.v_portale [4] == 1) { v_statuscanvas_context.drawImage (this.v_img, 60, 0, 20, 20, 15 * 20, 12 * 20, 20, 20); }
  if (this.v_portale [5] == 1) { v_statuscanvas_context.drawImage (this.v_img, 80, 0, 20, 20, 17 * 20, 12 * 20, 20, 20); }
  if (this.v_portale [6] == 1) { v_statuscanvas_context.drawImage (this.v_img, 100, 0, 20, 20, 15 * 20, 13 * 20, 20, 20); }
}
