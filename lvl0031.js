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

function c_lvl0031 () {}

c_lvl0031.prototype.p_aktion = function ()
{
  //Bossschlachtfeld
  if ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 10))
  {
    if (o_schlachtfelder.v_erledigt [203] == 0)
    {
      v_schlachtfeld = 203;
      o_kampf.p_start ("Steinriese");

    }
    else if (o_schlachtfelder.v_erledigt [203] == 1)
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText (v_kampftexte [3], "", "", "", "");
    }
  }

  //Levelwechsel
  if ((o_charakter.v_mxk == 7) && (o_charakter.v_myk == 0)) 
  {   
    o_engine.p_changeLvl (28, "d5", true, 7, 20);
  }
  else if ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 20)) 
  {
    o_musik.p_stop (1)
    o_engine.p_changeLvl (32, "manabrunnen", true, 10, 0);
    v_zone = "Manabrunnen";
    o_musik.p_play (6);
  }
}
