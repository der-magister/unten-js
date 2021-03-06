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

function c_lvl0016 () {}

c_lvl0016.prototype.p_aktion = function ()
{
  //Schild
  o_schilder.p_set (6, 6, v_schildtexte [4]);

  //Schlachtfelder
  o_schlachtfelder.p_feld (6, 14, 124);
  o_schlachtfelder.p_feld (6, 8, 125);
  o_schlachtfelder.p_feld (9, 10, 126);
  o_schlachtfelder.p_feld (13, 10, 127);
  o_schlachtfelder.p_feld (17, 10, 128);

  //Levelwechsel
  if ((o_charakter.v_mxk == 0) && (o_charakter.v_myk == 20))
  {   
      o_engine.p_changeLvl (15, "d2a", true, 20, 0);
  }
  if ((o_charakter.v_mxk == 20) && (o_charakter.v_myk == 10))
  {   
      if (o_charakter.v_mlvl < 17) { o_charakter.v_mlvl = 17; }
      o_engine.p_changeLvl (17, "d3", false, 0, 10);
  }

}
