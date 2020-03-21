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

function c_lvl0001 () {}

c_lvl0001.prototype.p_aktion = function ()
{
  //Schilder
  o_schilder.p_set (8, 16, v_texte [1]);
  o_schilder.p_set (12, 6, v_texte [2]);

  //Personen
  //Heiler
  if ((o_charakter.v_mxk == 4) && (o_charakter.v_myk == 6))
  {
    o_heiler.p_start ();
  }

  //Questgeber 1
  if ((o_charakter.v_mxk == 11) && (o_charakter.v_myk == 4))
  {
    o_questen.p_start ();
  }

  //Questgeber 2 - noch nicht entwickelt
  if ((o_charakter.v_mxk == 12) && (o_charakter.v_myk == 17))
  {
    o_fenster.p_drawWindow (20, 260);
    o_fenster.p_writeText (v_texte [5], "", "", "", "");
  }

  //Haendler
  if ((o_charakter.v_mxk == 5) && (o_charakter.v_myk == 15))
  {
    o_haendler.p_start ();
  }

  //Levelwechsel 0002
  if ((o_charakter.v_mxk == 15) && (o_charakter.v_myk == 5))
  {
    o_musik.p_stop (0);
    o_engine.p_changeLvl (2, "d1", true, 19, 3);
    o_musik.p_play (1);

    if (o_charakter.v_mlvl < 2) { o_charakter.v_mlvl = 2; }
  }

  //Levelwechsel Portale
  if ((o_charakter.v_mxk == 15) && (o_charakter.v_myk == 11))
  {
    o_musik.p_stop (0);
    o_engine.p_changeLvl (11, "d2", true, 19, 1);
    o_musik.p_play (1);
  }
  else if ((o_charakter.v_mxk == 16) && (o_charakter.v_myk == 11))
  {
    o_musik.p_stop (0);
    o_engine.p_changeLvl (16, "d3", true, 0, 20);
    o_musik.p_play (1);
  } 
  else if ((o_charakter.v_mxk == 15) && (o_charakter.v_myk == 11))
  {
    o_musik.p_stop (0);
    o_engine.p_changeLvl (23, "d4", true, 0, 16);
    o_musik.p_play (1);
  }
  else if ((o_charakter.v_mxk == 17) && (o_charakter.v_myk == 12))
  {
    o_musik.p_stop (0);
    o_engine.p_changeLvl (33, "d6", true, 10, 0);
    o_musik.p_play (1);
  }
  else if ((o_charakter.v_mxk == 15) && (o_charakter.v_myk == 12))
  {
    o_musik.p_stop (0);
    o_engine.p_changeLvl (26, "d5", true, 20, 1);
    o_musik.p_play (1);
  }
  else if ((o_charakter.v_mxk == 15) && (o_charakter.v_myk == 13))
  {
    o_musik.p_stop (0);
    o_engine.p_changeLvl (41, "d7", true, 20, 17);
    o_musik.p_play (1);
  }
}
