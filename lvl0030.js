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

function c_lvl0030 () {}

c_lvl0030.prototype.p_aktion = function ()
{
  //Schlachtfelder
  o_schlachtfelder.p_feld (2, 10, 197);
  o_schlachtfelder.p_feld (8, 5, 198);
  o_schlachtfelder.p_feld (11, 5, 199);
  o_schlachtfelder.p_feld (8, 15, 200);
  o_schlachtfelder.p_feld (11, 15, 201);
  o_schlachtfelder.p_feld (16, 10, 202);

  //Levelwechsel
  if ((o_charakter.v_mxk == 0) && (o_charakter.v_myk == 10)) 
  {   
    o_engine.p_changeLvl (29, "d5", false, 20, 10);
  }
}
