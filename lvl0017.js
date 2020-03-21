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

function c_lvl0017 () {}

c_lvl0017.prototype.p_aktion = function ()
{
  //Truhe mit Heiltrank
  o_truhen.p_heiltranktruhe (18, 10, 15, 1);

  //Schlachtfelder
  o_schlachtfelder.p_feld (5, 10, 129);
  o_schlachtfelder.p_feld (14, 10, 130);
  o_schlachtfelder.p_feld (10, 7, 131);
  o_schlachtfelder.p_feld (10, 3, 132);
  o_schlachtfelder.p_feld (10, 13, 133);
  o_schlachtfelder.p_feld (10, 17, 134);

  //Levelwechsel
  if ((o_charakter.v_mxk == 0) && (o_charakter.v_myk == 10))
  {   
    o_engine.p_changeLvl (16, "d3", false, 20, 10);
  }
  else if ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 0))
  {   
    if (o_charakter.v_mlvl < 18) { o_charakter.v_mlvl = 18; }
    o_engine.p_changeLvl (18, "d3", false, 10, 20);
  }
  else if ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 20))
  {   
    if (o_charakter.v_mlvl < 20) { o_charakter.v_mlvl = 20; }
    o_engine.p_changeLvl (20, "d3", false, 10, 0);
  }
  
}
