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

function c_lvl0009 () {}

c_lvl0009.prototype.p_aktion = function ()
{
  //Truhe mit Rüstung
  if ((o_charakter.v_mxk == 12) && (o_charakter.v_myk == 9))
  {
    o_fenster.p_drawWindow ();

    if (o_truhen.v_status [10] == 0)
    {
      if (o_charakter.v_schlachtfelder >= 90)
      {
        if (o_charakter.v_klasse == "Krieger")
        {
          o_charakter.v_ruestung = v_ruestungsitemtexte [1];
        }
        else if (o_charakter.v_klasse == "Dieb")
        {
          o_charakter.v_ruestung = v_ruestungsitemtexte [3];
        }
        else if (o_charakter.v_klasse == "Zauberer")
        {
          o_charakter.v_ruestung = v_ruestungsitemtexte [3];
        }

        o_charakter.v_ruestungswert = 1;
        o_ausgabe.p_writeRuestung ();  
        o_fenster.p_writeText (v_truhentexte [1] + o_charakter.v_ruestung, "", "", "", "");
        o_truhen.v_status [10] = 1;
        o_truhen.p_status ();
      }
      else
      {
        o_fenster.p_writeText (v_truhentexte [7], "", "", "", "");
      }
    }
    else if (o_truhen.v_status [10] == 1)
    {
      o_fenster.p_writeText (v_truhentexte [0], "", "", "", "");
    }
  }

  //Schlachtfelder
  o_schlachtfelder.p_feld (12, 18, 89);
  o_schlachtfelder.p_feld (4, 18, 90);
  o_schlachtfelder.p_feld (1, 15, 91);
  o_schlachtfelder.p_feld (1, 12, 92);
  o_schlachtfelder.p_feld (5, 9, 93);
  o_schlachtfelder.p_feld (1, 7, 94);
  o_schlachtfelder.p_feld (1, 4, 95);
  o_schlachtfelder.p_feld (4, 2, 96);
  o_schlachtfelder.p_feld (12, 2, 97);
  
  //Levelwechsel
  //Lvl 0008
  if ((o_charakter.v_mxk == 17) && (o_charakter.v_myk == 19))
  {   
    o_engine.p_changeLvl (8, "d1", false, 10, 19);
  }

  //Lvl0010
  else if ((o_charakter.v_mxk == 18) && (o_charakter.v_myk == 1))
  {  
    if (o_charakter.v_mlvl < 3) { o_charakter.v_mlvl = 3; }
    o_engine.p_changeLvl (10, "d1a", true, 18, 1);
  }
}
