//
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
//
// Charakterdefinitionen

function c_charakter ()
{
  this.v_name = "";
  this.v_klasse = "";

  this.v_klugheit  = 8;
  this.v_kraft     = 8;
  this.v_geschick  = 8;

  this.v_lebenspunkte  = 40;    //Lebenspunkte
  this.v_mlebenspunkte = 40;    //max. Lebenspunkte
  this.v_manapunkte    = 1;     //Manapunkte
  this.v_mmanapunkte   = 1;     //max. Lebenpunkte

  this.v_status  = "";  //postive Zustände
  this.v_zustand = "";  //negative Zustände

  this.v_erfahrungspunkte = 0;  //Erfahrungspunkte
  this.v_stufe            = 1;  //aktuelle Erfahrungsstufe

  this.v_waffe         = "Dolch";              //getragene Waffe
  this.v_ruestung      = "Straßenkleidung";     //getragende Rüstung
  this.v_schild        = "keins";                    //gehaltendes schild
  this.v_trefferpunkte = 6;                 //Trefferpunkte der Waffe
  this.v_ruestungswert = 0;                 //Rüstungsschutz der Rüstung
  this.v_schildwert    = 0;                 //Rüstungsschutz des Schildes

  this.v_gold = 25;
  this.v_heiltrank = 5;                     //Heiltränke
  this.v_manatrank   = 0;
  this.v_medizintrank = 0;
  this.v_portalrolle = 0;
  this.v_schluessel  = 0;
  this.v_proviant    = 10;
  this.v_waffenorb   = 0;                  //Anzahl Waffenorbs zur Verbesserung der Waffe
  this.v_ruestungsorb = 0;
  this.v_schildorb = 0;

  this.v_regnen     = "deaktiviert";              //wenn aktiv, dann Zauber aktiv
  this.v_sporen     = "deaktiviert";
  this.v_umwandlung = "deaktiviert";
  this.v_wiederbelebung = "deaktiviert";
  this.v_portal         = "deaktiviert";
  this.v_feuerball      = "deaktiviert";
  this.v_blitz          = "deaktiviert";

  this.v_schritte       = 0;
  this.v_schlachtfelder = 0;              //erledigte Schlachtfelder
  this.v_quest          = "false";        //wenn true, dann ist eine Quest aktiv
  this.v_questitem      = "";
  this.v_queststand     = "Keine Aufgabe aktiv";
  this.v_equest         = 0;              //Anzahl der erledigten Questen

  this.v_xk  = 0;
  this.v_yk  = 0;
  this.v_mxk = 16;
  this.v_myk = 12;
  this.v_mlvl = 1;                        //maximal erreichtes Spiellevel

  this.v_sound = 0;
}

//Init
c_charakter.prototype.p_init = function ()
{
  this.v_klugheit = 8; this.v_kraft = 8; this.v_geschick = 8; this.v_lebenspunkte = 40; this.v_mlebenspunkte = 40;
  this.v_manapunkte = 1; this.v_mmanapunkte = 1; this.v_erfahrungspunkte = 0; this.v_stufe = 1; this.v_schild = v_schilditemtexte [0];
  this.v_waffe = v_waffenitemtexte [0]; this.v_ruestung = v_ruestungsitemtexte [0]; this.v_trefferpunkte = 6; this.v_ruestungswert = 0;
  this.v_schildwert = 0; this.v_gold = 25; this.v_heiltrank = 5; this.v_manatrank = 0; this.v_portalrolle = 0;
  this.v_schluessel = 0; this.v_proviant = 10; this.v_medizintrank = 0; this.v_regnen = "deaktiviert"; 
  this.v_sporen = "deaktiviert"; this.v_umwandlung = "deaktiviert"; this.v_wiederbelebung = "deaktiviert";
  this.v_portal = "deaktiviert"; this.v_feuerball = "deaktiviert"; this.v_blitz = "deaktiviert"; this.v_schritte = 0;
  this.v_status = "Keiner", this.v_zustand = "Gesund"; this.v_schlachtfelder = 0; this.v_quest = "false";
  this.v_questitem = ""; this.v_queststand = v_questtexte [45]; this.v_equest = 0; this.v_mlvl = 1; this.v_waffenorb = 0;
  this.v_ruestungsorb = 0; this.v_schildorb = 0;

  //Festlegung der klassenspezifischen Aspekte
  if (document.getElementsByName ("klasse")[0].checked)
  {
    //für Krieger
    this.v_klasse = "Krieger"; this.v_kraft++, this.v_lebenspunkte += 5; this.v_mlebenspunkte += 5;
    document.getElementById ("spielersprite").src = "daten/gfk/spieler/Krieger-1.png";
  }
  else if (document.getElementsByName ("klasse")[1].checked)
  {
    //für Dieb
    this.v_klasse = "Dieb"; this.v_geschick++; this.v_lebenspunkte += 5; this.v_mlebenspunkte += 5; 
    document.getElementById ("spielersprite").src = "daten/gfk/spieler/Dieb-1.png";
  }
  else if (document.getElementsByName ("klasse")[2].checked)
  {
    //für Zauberer
    this.v_klasse = "Zauberer"; this.v_klugheit++; this.v_manapunkte++; this.v_mmanapunkte++;
    document.getElementById ("spielersprite").src = "daten/gfk/spieler/Zauberer-1.png";
    this.v_waffe = v_waffenitemtexte [1];
  }
}

//setzt Charaktersprite an angegebener Position
c_charakter.prototype.p_setSprite = function (v_x, v_y)
{
  this.v_xk = v_x;
  this.v_yk = v_y;

  this.v_mxk = (this.v_xk - 10) / 20;
  this.v_myk = (this.v_yk - 10) / 20;

  document.getElementById ("spielersprite").style.left = this.v_xk + "px";
  document.getElementById ("spielersprite").style.top = this.v_yk + "px";
}

//bewegt Spielersprite nach Norden
c_charakter.prototype.p_bewegNord = function ()
{
  if (this.v_yk == 10 || v_gamemap [this.v_myk - 1][this.v_mxk] == "=" || v_gamemap [this.v_myk - 1][this.v_mxk] == "f" ||
                         v_gamemap [this.v_myk - 1][this.v_mxk] == "~")
  {
  }
  else
  {
    v_keylock = true;

    if (this.v_sound == 0)
    {
      o_sound.p_play (0);
      this.v_yk -= 20; this.v_myk--; this.v_sound = 1; this.v_schritte++;
    }

    setTimeout (function ()
    {
      o_charakter.p_setSprite (o_charakter.v_xk, o_charakter.v_yk); 
      console.log ("XK: " + o_charakter.v_xk + " YK: " + o_charakter.v_yk);
      o_charakter.v_sound = 0; o_sound.p_stop (0); v_keylock = false; o_charakter.v_schritte++;
    }, 70);
  } 
}

//bewegt Spielersprite nach Süden
c_charakter.prototype.p_bewegSued = function ()
{
  if (this.v_yk == 410 || v_gamemap [this.v_myk + 1][this.v_mxk] == "=" || v_gamemap [this.v_myk + 1][this.v_mxk] == "f" ||
                          v_gamemap [this.v_myk + 1][this.v_mxk] == "~") 
  {
  }
  else
  {
    v_keylock = true;

    if (this.v_sound == 0)
    {
      o_sound.p_play (0);
      this.v_yk += 20;  this.v_myk++; this.v_sound = 1; this.v_schritte++;
    }

    setTimeout (function ()
    {
      o_charakter.p_setSprite (o_charakter.v_xk, o_charakter.v_yk); 
      console.log ("XK: " + o_charakter.v_xk + " YK: " + o_charakter.v_yk);
      o_charakter.v_sound = 0; o_sound.p_stop (0); v_keylock = false;
    }, 70);
  } 
}

//bewegt Spielersprite nach Westen
c_charakter.prototype.p_bewegWest = function ()
{
  if (this.v_xk == 10 || v_gamemap [this.v_myk][this.v_mxk - 1] == "=" || v_gamemap [this.v_myk][this.v_mxk - 1] == "f" || 
                         v_gamemap [this.v_myk][this.v_mxk - 1] == "~") 
  {
  }
  else
  {      
    v_keylock = true;
        
    if (this.v_sound == 0)
    {
      o_sound.p_play (0);
      this.v_xk -= 20;  this.v_mxk--; this.v_sound = 1; this.v_schritte++;
    }
      
    setTimeout (function ()
    {
      o_charakter.p_setSprite (o_charakter.v_xk, o_charakter.v_yk);
      console.log ("XK :" + o_charakter.v_xk + " YK :" + o_charakter.v_yk);
      o_charakter.v_sound = 0; o_sound.p_stop (0); v_keylock = false;
    }, 70);
  } 
}

//bewegt Spielersprite nach Osten
c_charakter.prototype.p_bewegOst = function ()
{
  if (this.v_xk == 410 || v_gamemap [this.v_myk][this.v_mxk + 1] == "=" || v_gamemap [this.v_myk][this.v_mxk + 1] == "f" ||
                          v_gamemap [this.v_myk][this.v_mxk + 1] == "~") 
  {}
  else
  {
    v_keylock = true; 

    if (this.v_sound == 0)
    {
      o_sound.p_play (0);
      this.v_xk += 20;  this.v_mxk++; this.v_sound = 1; this.v_schritte++;
    }
    
    setTimeout (function ()
    {
      o_charakter.p_setSprite (o_charakter.v_xk, o_charakter.v_yk);
      console.log ("XK :" + o_charakter.v_xk + " YK :" + o_charakter.v_yk);
      o_charakter.v_sound = 0; o_sound.p_stop (0); v_keylock = false;
    }, 70);
  } 
}
