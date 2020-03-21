//  Unten - ein Rollenspiel im Retrodesign
//
//   Copyright (C) 2018 Heiko Wolf
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

function c_lvl0038 () {}

c_lvl0038.prototype.p_aktion = function ()
{
  //Truhe mit Zauber Umwandlung
  if ((o_charakter.v_mxk == 18) && (o_charakter.v_myk == 10))
  {
    o_fenster.p_drawWindow ();

    if (o_truhen.v_status [24] == 0)
    {
      if (o_charakter.v_schlachtfelder >= 130) 
      {
        o_truhen.v_status [24] = 1;
        o_fenster.p_writeText ("Ihr findet den Zauber Umwandlung!", "", "", "", "", "");
        o_charakter.v_umwandlung = "aktiv";
        document.getElementById("Zauberliste").options[3]  = new Option ("Umwandlung");
        o_truhen.p_status ();
      } 
      else
      {
        o_fenster.p_writeText ("Die Truhe ist verschlossen! Eine blauglühende 130 ist zu sehen.", "", "", "", "");
      }
    }
    else 
    {
        o_fenster.p_writeText (v_truhentexte [0], "", "", "", ""); 
    }
  } 
  
  //Schlachtfelder
  o_schlachtfelder.p_feld (2, 10, 241);
  o_schlachtfelder.p_feld (5, 10, 242);
  o_schlachtfelder.p_feld (12, 10, 243);
  o_schlachtfelder.p_feld (15, 10, 244);
  
  //Levelwechsel
  if ((o_charakter.v_mxk == 0) && (o_charakter.v_myk == 10)) 
  {   
    o_engine.p_changeLvl (37, "d6", false, 20, 10);
  }
}
