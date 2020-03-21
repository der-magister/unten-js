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

function c_lvl0014 () {}

c_lvl0014.prototype.p_aktion = function ()
{
  //Truhe mit Zauber Regnen
  if ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 3))
  {
    o_fenster.p_drawWindow ();

    if (o_truhen.v_status [14] == 0)
    {
      if (o_charakter.v_schlachtfelder >= 123)
      {
        o_truhen.v_status [14] = 1;
        o_fenster.p_writeText (v_truhentexte [11], "", "", "", "");
        o_charakter.v_regnen = "aktiv";
        document.getElementById("Zauberliste").options[1]  = new Option ("Regnen");
        o_truhen.p_status ();
      } 
      else
      {
        o_fenster.p_writeText (v_truhentexte [10], "", "", "", "");
      }
    }
    else 
    {
        o_fenster.p_writeText (v_truhentexte [0], "", "", "", ""); 
    }
  } 

  //Schlachtfelder
  o_schlachtfelder.p_feld (2, 19,116);
  o_schlachtfelder.p_feld (6, 19, 117);
  o_schlachtfelder.p_feld (10, 19, 118);
  o_schlachtfelder.p_feld (14, 19, 119);
  o_schlachtfelder.p_feld (18, 19, 120);
  o_schlachtfelder.p_feld (10, 15, 121);
  o_schlachtfelder.p_feld (10, 10, 122);
  
  //Levelwechsel
  //Lvl 0013
  if ((o_charakter.v_mxk == 0) && (o_charakter.v_myk == 19))
  {   
    o_engine.p_changeLvl (13, "d2", false, 20, 19);
  }
  //Lvl0015
  else if ((o_charakter.v_mxk == 20) && (o_charakter.v_myk == 19))
  {  
    if (o_charakter.v_mlvl < 15) { o_charakter.v_mlvl = 15; }
    o_engine.p_changeLvl (15, "d2a", true, 0, 19);
  }
}
