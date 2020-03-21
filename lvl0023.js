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

function c_lvl0023 () {}

c_lvl0023.prototype.p_aktion = function ()
{
  //Schild
  o_schilder.p_set (12, 9, v_schildtexte [5]);

  //Truhe
  o_truhen.p_heiltranktruhe (7, 2, 19, 5); 

  //Schlachtfelder
  o_schlachtfelder.p_feld (3, 16, 157);
  o_schlachtfelder.p_feld (7, 5, 158);
  o_schlachtfelder.p_feld (10, 10, 159);
  o_schlachtfelder.p_feld (15, 10, 160);
  o_schlachtfelder.p_feld (16, 7, 161);
  o_schlachtfelder.p_feld (16, 12, 162);
  
  //Levelwechsel
  if ((o_charakter.v_mxk == 0) && (o_charakter.v_myk == 16))
  {   
    o_engine.p_changeLvl (22, "d3a", true, 20, 16);
  }
  else if ((o_charakter.v_mxk == 18) && (o_charakter.v_myk == 7))
  {   
    if (o_charakter.v_mlvl < 24) { o_charakter.v_mlvl = 24; }
    o_engine.p_changeLvl (24, "d4", false, 18, 7);
  }
}
