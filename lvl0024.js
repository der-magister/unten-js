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

function c_lvl0024 () {}

c_lvl0024.prototype.p_aktion = function ()
{
  //Truhe mit Waffe

  //Truhe neuer Waffe
  if ((o_charakter.v_mxk == 5) && (o_charakter.v_myk == 8))
  {
    o_fenster.p_drawWindow ();

    if (o_truhen.v_status [20] == 0)
    {
      if (o_charakter.v_klasse == "Krieger") 
      {
        o_charakter.v_waffe = v_waffenitemtexte [5]; 
      }
      else if (o_charakter.v_klasse == "Dieb") 
      {  
        o_charakter.v_waffe = v_waffenitemtexte [6]; 
      }

      else if (o_charakter.v_klasse == "Zauberer") 
      {  
        o_charakter.v_waffe = v_waffenitemtexte [7];
      }

      o_fenster.p_writeText (v_truhentexte [1] + o_charakter.v_waffe, "", "", "", "");
      o_charakter.v_trefferpunkte = 8;
      o_ausgabe.p_writeWaffe ();
      o_truhen.v_status [20] = 1;
      o_truhen.p_status ();
    }
    else
    {
      o_fenster.p_writeText (v_truhentexte  [0], "", "", "", "");
    }
  }

  //Schlachtfelder
  o_schlachtfelder.p_feld (15, 9, 163);
  o_schlachtfelder.p_feld (17, 11, 164);
  o_schlachtfelder.p_feld (16, 17, 165);
  o_schlachtfelder.p_feld (10, 18, 166);
  o_schlachtfelder.p_feld (5, 15, 167);
  o_schlachtfelder.p_feld (5,11, 168);

  //Levelwechsel
  if ((o_charakter.v_mxk == 18) && (o_charakter.v_myk == 7))
  {   
    o_engine.p_changeLvl (23, "d4", false, 18, 7);
  }
  else if ((o_charakter.v_mxk == 18) && (o_charakter.v_myk == 13))
  {   
    o_engine.p_changeLvl (25, "d4a", true, 18, 13);
  }
}
