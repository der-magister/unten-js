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

function c_lvl0025 () {}

c_lvl0025.prototype.p_aktion = function ()
{
  //Bossschlachtfeld
  if ((o_charakter.v_mxk == 17) && (o_charakter.v_myk == 8))
  {
    if (o_schlachtfelder.v_erledigt [169] == 0)
    {
      v_schlachtfeld = 169;
      o_kampf.p_start ("Puppengeist");

    }
    else if (o_schlachtfelder.v_erledigt [169] == 1)
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText (v_kampftexte [3], "", "", "", "");
    }
  }
  //Levelwechsel
  if ((o_charakter.v_mxk == 18) && (o_charakter.v_myk == 13))
  {   
    o_engine.p_changeLvl (24, "d4", true, 18, 13);
  }
  else if ((o_charakter.v_mxk == 0) && (o_charakter.v_myk == 1))
  {   
    if (o_charakter.v_schluessel >= 8)
    {
      o_engine.p_changeLvl (26, "d5", true, 20, 1);
      if (o_portale.v_portale [4] == 0) { o_portale.v_portale [4] = 1; }
    }
    else
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText (v_texte [27], "", "", "", "");
    }
  }
}
