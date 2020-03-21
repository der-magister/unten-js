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

//Seite 6 Buch 1

function c_lvl0003 () {}

c_lvl0003.prototype.p_aktion = function ()
{
  //Schild
  o_schilder.p_set (3, 1, v_schildtexte [0]);
  
  //Truhen 
  o_truhen.p_goldtruhe (15, 12, 3, 50);
  o_truhen.p_heiltranktruhe (9, 12, 4, 1);

  //Schlachtfelder
  o_schlachtfelder.p_feld (10, 5, 14)
  o_schlachtfelder.p_feld (16, 5, 15);  
  o_schlachtfelder.p_feld (18, 7, 16);
  o_schlachtfelder.p_feld (9, 7, 17);
  o_schlachtfelder.p_feld (9, 9, 18);
  o_schlachtfelder.p_feld (16, 15, 19);
  o_schlachtfelder.p_feld (16, 17, 20);  
  o_schlachtfelder.p_feld (18, 19, 21);
  o_schlachtfelder.p_feld (9, 19, 22);
  o_schlachtfelder.p_feld (2, 19, 23);
  o_schlachtfelder.p_feld (3, 17, 24);  
  o_schlachtfelder.p_feld (4, 14, 25);
  o_schlachtfelder.p_feld (2, 12, 26);
  o_schlachtfelder.p_feld (2, 10,27);
  o_schlachtfelder.p_feld (3, 4, 28);

  //Levelwechsel
  //Lvl0002
  if ((o_charakter.v_mxk == 8) && (o_charakter.v_myk == 2))
  {   
      o_engine.p_changeLvl (2, "d1", false, 8, 2);
  }

  //Lvl0004
  else if ((o_charakter.v_mxk == 1) && (o_charakter.v_myk == 8))
  {   
      if (o_charakter.v_mlvl < 4) { o_charakter.v_mlvl = 4; }
      o_engine.p_changeLvl (4, "d1", false, 1, 7);
  }
}
