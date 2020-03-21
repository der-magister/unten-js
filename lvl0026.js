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

function c_lvl0026 () {}

c_lvl0026.prototype.p_aktion = function ()
{
   //Schild
   o_schilder.p_set (6, 6, "Die Ebene");

   //Schlachtfelder
   o_schlachtfelder.p_feld (16, 1, 170);
   o_schlachtfelder.p_feld (14, 1, 171);
   o_schlachtfelder.p_feld (10, 4, 172);
   o_schlachtfelder.p_feld (10, 6, 173);
   o_schlachtfelder.p_feld (8, 10, 174);
   o_schlachtfelder.p_feld (3, 10, 175);

   //Levelwechsel
   if ((o_charakter.v_mxk == 20) && (o_charakter.v_myk == 1)) {   
    o_engine.p_changeLvl (25, "d4a", true, 0, 1);
   }
  else if ((o_charakter.v_mxk == 0) && (o_charakter.v_myk == 10))
  {   
    o_engine.p_changeLvl (27, "d5", false, 20, 10);
  }
}
