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

function c_lvl0013 () {}

c_lvl0013.prototype.p_aktion = function ()
{
  //Truhe mit Holzschild 
  if ((o_charakter.v_mxk == 11) && (o_charakter.v_myk == 7))
  {
    o_fenster.p_drawWindow ();

    if (o_truhen.v_status [12] == 0)
    {
      if (o_charakter.v_klasse == "Krieger") {  o_charakter.v_schild =  v_schilditemtexte [1]; }
      else if (o_charakter.v_klasse == "Dieb") {  o_charakter.v_schild =  v_schilditemtexte [2]; }
      else if (o_charakter.v_klasse == "Zauberer") {  o_charakter.v_schild =  v_schilditemtexte [3]; }

      o_fenster.p_writeText (v_truhentexte  [1] + o_charakter.v_schild, "", "", "", "");
      
      o_charakter.v_schildwert = 1;
      o_ausgabe.p_writeSchild ();
      o_truhen.v_status [12] = 1;
      o_truhen.p_status ();
    }
    else
    {
      o_fenster.p_writeText (v_truhentexte  [0], "", "", "", "");
    }
  }

  //Truhe mit Blauschuppe - Quest 4
  if ((o_charakter.v_mxk == 17) && (o_charakter.v_myk == 10))
  {
    o_fenster.p_drawWindow ();

    if (o_truhen.v_status [13] == 0)
    {
      if (o_charakter.v_schlachtfelder >= 112)
      {
        o_questen.v_quest [4] = 1; o_charakter.v_quest = "true";
        o_charakter.v_queststand = v_questtexte [25];
        o_charakter.v_questitem = "Blauschuppe"
        o_ausgabe.p_writeQueststand ();  
        o_fenster.p_writeText (v_questtexte [26], "", "", "", "");
        o_truhen.v_status [13] = 1;
        o_truhen.p_status ();
      }
      else
      {
        o_fenster.p_writeText (v_questtexte [27], "", "", "", "");
      }
    }
    else if (o_truhen.v_status [13] == 1)
    {
      o_fenster.p_writeText ("Die Truhe ist geöffnet und leer.", "", "", "", "");     
    }
  }

  //Schlachtfelder
  o_schlachtfelder.p_feld (2, 19, 110);
  o_schlachtfelder.p_feld (4, 15, 111);
  o_schlachtfelder.p_feld (8, 17, 112);
  o_schlachtfelder.p_feld (11, 17, 113);
  o_schlachtfelder.p_feld (15, 14, 114);
  o_schlachtfelder.p_feld (18, 19, 115);
  
  //Levelwechsel
  //Lvl 0012
  if ((o_charakter.v_mxk == 0) && (o_charakter.v_myk == 19))
  {   
    o_engine.p_changeLvl (12, "d2", false, 20, 19);
  }
  //Lvl0014
  else if ((o_charakter.v_mxk == 20) && (o_charakter.v_myk == 19))
  {  
    if (o_charakter.v_schluessel >= 4)
    {
      if (o_charakter.v_mlvl < 14) { o_charakter.v_mlvl = 14; }
      o_engine.p_changeLvl (14, "d2", false, 0, 19);
    }
    else
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText (v_texte [27], "", "", "", "");
    }
  }
}
