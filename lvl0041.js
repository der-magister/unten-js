//  Unten - ein Rollenspiel im Retrodesign
//
//   Copyright (C) 2018 Heiko Wolf
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

function c_lvl0041 () {}

c_lvl0041.prototype.p_aktion = function ()
{ 
  //Schild
  o_schilder.p_set (19, 19, "Der Eistempel");
  
  //Schlachtfelder
  o_schlachtfelder.p_feld (19, 10, 251);
  o_schlachtfelder.p_feld (16, 3, 252);
  o_schlachtfelder.p_feld (14, 10, 253);
  o_schlachtfelder.p_feld (8, 1, 254);
  o_schlachtfelder.p_feld (8, 4, 255);
  o_schlachtfelder.p_feld (1, 5, 256);
  o_schlachtfelder.p_feld (9, 9, 257);
  o_schlachtfelder.p_feld (4, 11, 258);
  o_schlachtfelder.p_feld (10, 12, 259);
  o_schlachtfelder.p_feld (16, 15, 260);
  o_schlachtfelder.p_feld (13, 19, 261);
  o_schlachtfelder.p_feld (8, 14, 262);
  o_schlachtfelder.p_feld (4, 17, 263);
  
  //Levelwechsel
  if ((o_charakter.v_mxk == 20) && (o_charakter.v_myk == 17)) 
  {   
    o_engine.p_changeLvl (40, "d6a", true, 0, 18);
  }
  else if ((o_charakter.v_mxk == 4) && (o_charakter.v_myk == 20)) 
  {
    o_engine.p_changeLvl (42, "d7", false, 4, 0);
  }
}
