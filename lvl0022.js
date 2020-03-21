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

function c_lvl0022 () {}

c_lvl0022.prototype.p_aktion = function ()
{
  //Bossschlachtfeld
  if ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 10))
  {
    if (o_schlachtfelder.v_erledigt [156] == 0)
    {
      v_schlachtfeld = 156;
      o_kampf.p_start ("Pilzmensch");

    }
    else if (o_schlachtfelder.v_erledigt [156] == 1)
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText (v_kampftexte [3], "", "", "", "");
    }
  }

 //Levelwechsel
  if ((o_charakter.v_mxk == 0) && (o_charakter.v_myk == 16))
  {   
    o_engine.p_changeLvl (21, "d3", true, 20, 16);
  }
  else if ((o_charakter.v_mxk == 20) && (o_charakter.v_myk == 16))
  {
    if (o_charakter.v_schluessel >= 7)
    {
      if (o_charakter.v_mlvl < 23) { o_charakter.v_mlvl = 23; }
      if (o_portale.v_portale [3] == 0) { o_portale.v_portale [3] = 1; }
      o_engine.p_changeLvl (23, "d4", true, 0, 16);
    }
    else 
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText (v_texte [27], "", "", "", "");
    }
  }
}
