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

function c_lvl0010 () {}

c_lvl0010.prototype.p_aktion = function ()
{
  //Bosschlachtfeld
  if ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 9))
  {
    if (o_schlachtfelder.v_erledigt [98] == 0)
    {
      v_schlachtfeld = 98;
      o_kampf.p_start ("Rattenmensch");

    }
    else if (o_schlachtfelder.v_erledigt [98] == 1)
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText (v_kampftexte [3], "", "", "", "");
    }

  }

  //Levelwechsel
  //Lvl 0009
  if ((o_charakter.v_mxk == 18) && (o_charakter.v_myk == 1))
  {   
      o_engine.p_changeLvl (9, "d1", true, 18, 1);
  }

  //Lvl0011
  else if ((o_charakter.v_mxk == 2) && (o_charakter.v_myk == 19))
  {  
    if (o_charakter.v_schluessel >= 3) 
    {
      if (o_charakter.v_mlvl < 11) { o_charakter.v_mlvl = 11; }
      //Portal aktiv schalten
      if (o_portale.v_portale [1] == 0) { o_portale.v_portale [1] = 1; }
      o_engine.p_changeLvl (11, "d2", true, 19, 1);
    }
    else 
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText (v_texte [27], "", "", "", "");
    }
  }
}
