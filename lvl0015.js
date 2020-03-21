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

function c_lvl0015 () {}

c_lvl0015.prototype.p_aktion = function ()
{
  if ((o_charakter.v_mxk == 9) && (o_charakter.v_myk == 10))
  {
    if (o_schlachtfelder.v_erledigt [123] == 0)
    {
      v_schlachtfeld = 123;
      o_kampf.p_start ("Riesenkrake");

    }
    else if (o_schlachtfelder.v_erledigt [123] == 1)
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText (v_kampftexte [3], "", "", "", "");
    }
  }

  //Levelwechsel
  //Lvl 0014
  if ((o_charakter.v_mxk == 0) && (o_charakter.v_myk == 19))
  {   
      o_engine.p_changeLvl (14, "d2", true, 20, 19);
  }
  //Lvl0016
  else if ((o_charakter.v_mxk == 20) && (o_charakter.v_myk == 0))
  {  
    if (o_charakter.v_schluessel >= 5)
    {
      if (o_portale.v_portale [2] == 0) { o_portale.v_portale [2] = 1; } //Portal freigeben
      if (o_charakter.v_mlvl < 16) { o_charakter.v_mlvl = 16; }
      o_engine.p_changeLvl (16, "d3", true, 0, 20);
    }
    else
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText (v_texte [27], "", "", "", "");
    }
  }
}
