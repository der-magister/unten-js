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

function c_lvl0043 () {}

c_lvl0043.prototype.p_aktion = function ()
{
  //Truhe mit Manatrank
  o_truhen.p_manatranktruhe (3, 1, 26, 1);

  //Schlachtfelder
  o_schlachtfelder.p_feld (14, 2, 275);
  o_schlachtfelder.p_feld (18, 4, 276);
  o_schlachtfelder.p_feld (15, 6, 277);
  o_schlachtfelder.p_feld (11, 6, 278);
  o_schlachtfelder.p_feld (6, 6, 279);
  o_schlachtfelder.p_feld (3, 4, 280);
  o_schlachtfelder.p_feld (7, 9, 281);
  o_schlachtfelder.p_feld (10, 12, 282);
  o_schlachtfelder.p_feld (12, 15, 283);
  o_schlachtfelder.p_feld (16, 11, 284);
  o_schlachtfelder.p_feld (18, 14, 285);
  o_schlachtfelder.p_feld (16, 18, 286);
  o_schlachtfelder.p_feld (9, 18, 287);
  o_schlachtfelder.p_feld (7, 15, 288);
  o_schlachtfelder.p_feld (5, 16, 289);

  //Levelwechsel
  if ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 0)) 
  {   
    o_engine.p_changeLvl (42, "d7", false, 10, 20);
  }
  else if ((o_charakter.v_mxk == 0) && (o_charakter.v_myk == 18)) 
  {
    o_engine.p_changeLvl (44, "d7", false, 20, 18);
  }  
}