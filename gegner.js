//   Unten - ein Rollenspiel im Retrodesign
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

function c_gegner()
{
  this.v_sprite = ""; 
  this.v_name = ""; 
  this.v_lebenspunkte = 0; 
  this.v_mlebenspunkte = 0; 
  this.v_angriffswert = 0; 
  this.v_trefferpunkte = 0; 
  this.v_spezial = "";
  this.v_erfahrungspunkte = 0; 
  this.v_gold = 0;
}

c_gegner.prototype.p_prepare = function (v_id)
{
  this.v_sprite = v_gegnerdaten [v_id] [0]; 
  this.v_name = v_gegnerdaten [v_id] [1];
  this.v_lebenspunkte = v_gegnerdaten [v_id] [2]; 
  this.v_mlebenspunkte = v_gegnerdaten [v_id] [3]; 
  this.v_angriffswert = v_gegnerdaten [v_id] [4]; 
  this.v_trefferpunkte = v_gegnerdaten [v_id] [5]; 
  this.v_spezial = v_gegnerdaten [v_id] [6]; 
  this.v_erfahrungspunkte = v_gegnerdaten [v_id] [7]; 
  this.v_gold = v_gegnerdaten [v_id] [8]; 
  document.getElementById ("gegnersprite").src = this.v_sprite;
}
