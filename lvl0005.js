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

function c_lvl0005 () {}

c_lvl0005.prototype.p_aktion = function ()
{
  //Truhe neuer Waffe
  if ((o_charakter.v_mxk == 14) && (o_charakter.v_myk == 12))
  {
    o_fenster.p_drawWindow ();

    if (o_truhen.v_status [7] == 0)
    {
      if (o_charakter.v_klasse == "Krieger") 
      {
        o_charakter.v_waffe = v_waffenitemtexte [2]; 
      }
      else if (o_charakter.v_klasse == "Dieb") 
      {  
        o_charakter.v_waffe = v_waffenitemtexte [3]; 
      }

      else if (o_charakter.v_klasse == "Zauberer") 
      {  
        o_charakter.v_waffe = v_waffenitemtexte [4];
      }

      o_fenster.p_writeText (v_truhentexte [1] + o_charakter.v_waffe, "", "", "", "");
      o_charakter.v_trefferpunkte = 7;
      o_ausgabe.p_writeWaffe ();
      o_truhen.v_status [7] = 1;
      o_truhen.p_status ();
    }
    else
    {
      o_fenster.p_writeText (v_truhentexte  [0], "", "", "", "");
    }
  }

  //Truhe mit Portalrolle
  o_truhen.p_portalrolletruhe (19, 7, 8, 1);

  //Schlachtfelder
  o_schlachtfelder.p_feld (16, 17, 49);
  o_schlachtfelder.p_feld (8, 17, 50);
  o_schlachtfelder.p_feld (6, 14, 51);
  o_schlachtfelder.p_feld (6, 11, 52);
  o_schlachtfelder.p_feld (3, 9, 53);
  o_schlachtfelder.p_feld (3, 7, 54);  
  o_schlachtfelder.p_feld (8, 8, 55);
  o_schlachtfelder.p_feld (12, 8, 56);
  o_schlachtfelder.p_feld (13, 4, 57);
  o_schlachtfelder.p_feld (3, 4, 58);
  o_schlachtfelder.p_feld (1, 3, 59);
  o_schlachtfelder.p_feld (6, 1, 60);
  o_schlachtfelder.p_feld (13, 2, 61);

  //Levelwechsel
  //Lvl 0004
  if ((o_charakter.v_mxk == 13) && (o_charakter.v_myk == 19))
  {   
    o_engine.p_changeLvl (4, "d1", false, 12, 19);
  }

  //Lvl0006
  else if ((o_charakter.v_mxk == 18) && (o_charakter.v_myk == 4))
  {   
     if (o_charakter.v_mlvl < 6) { o_charakter.v_mlvl = 6; }
    o_engine.p_changeLvl (6, "d1", false, 19, 1);
  }
}
