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

function c_questen ()
{
  this.v_quest = []; //Statuscodes: 0 - Quest nicht angenommen, 1 - Quest aktiv, 2 - Quest erledigt
}

c_questen.prototype.p_init = function ()
{
  for (let v_i = 1; v_i < 256; v_i++) { this.v_quest [v_i] = 0; }
}

c_questen.prototype.p_start = function ()
{
  o_fenster.p_drawWindow (20, 260);

  //Quest 1: Zauberstab finden
  if ((this.v_quest [1] == 0) && (o_charakter.v_quest == "false"))
  {
    o_fenster.p_writeText (v_questtexte [0], v_questtexte [1], v_questtexte [2], "", "");
    this.v_quest [1] = 1; o_charakter.v_quest = "true";
    o_charakter.v_queststand = "Zauberstab finden";
    o_ausgabe.p_writeQueststand (); 
  }
  else if ((this.v_quest [1] == 1) && (o_charakter.v_questitem == "Zauberstab"))
  {
    o_fenster.p_writeText (v_questtexte [6], v_questtexte [7], "", v_questtexte [8], "");
    this.v_quest [1] = 2; o_charakter.v_quest = "false"; o_charakter.v_equest++; o_charakter.v_gold = o_charakter.v_gold + 100;
    o_charakter.v_queststand = "Keine Aufgabe aktiv"; o_charakter.v_questitem = ""; 
    o_charakter.v_erfahrungspunkte = o_charakter.v_erfahrungspunkte + 25; o_charakter.v_schluessel++;
    o_ausgabe.p_writeQueststand ();
    o_ausgabe.p_writeErfahrungspunkte ();
    o_ausgabe.p_writeGold ();
  }
  //Quest 2: Rubin finden
  else if ((this.v_quest [2] == 0) && (o_charakter.v_quest == "false"))
  {
    o_fenster.p_writeText (v_questtexte [9], v_questtexte [10], v_questtexte [11], "", "");
    this.v_quest [2] = 1; o_charakter.v_quest = "true";
    o_charakter.v_queststand = "Rubin finden";
    o_ausgabe.p_writeQueststand (); 
  }
  else if ((this.v_quest [2] == 1) && (o_charakter.v_questitem == "Rubin"))
  {
    o_fenster.p_writeText (v_questtexte [13], v_questtexte [14], "", v_questtexte [15], "");
    this.v_quest [2] = 2; o_charakter.v_quest = "false"; o_charakter.v_equest++; o_charakter.v_heiltrank = o_charakter.v_heiltrank + 5;
    o_charakter.v_queststand = "Keine Aufgabe aktiv"; o_charakter.v_erfahrungspunkte = o_charakter.v_erfahrungspunkte + 50;
    o_charakter.v_schluessel++; o_charakter.v_questitem = "";
    o_ausgabe.p_writeQueststand ();
    o_ausgabe.p_writeErfahrungspunkte ();
    o_ausgabe.p_writeHeiltrank ();
  }
  //Quest 3: Rattenmensch töten
  else if ((this.v_quest [3] == 0) && (o_charakter.v_quest == "false"))
  {
    o_fenster.p_writeText (v_questtexte [0], "", v_questtexte [18], "", "");
    this.v_quest [3] = 1; o_charakter.v_quest = "true";
    o_charakter.v_queststand = v_questtexte [19];
    o_ausgabe.p_writeQueststand (); 
  }
  else if ((this.v_quest [3] == 1) && (o_charakter.v_questitem == "Rattenmensch"))
  {
    o_fenster.p_writeText (v_questtexte [20], "", v_questtexte [21], "", v_questtexte [22]);
    this.v_quest [3] = 2; o_charakter.v_quest = "false"; o_charakter.v_equest++; o_charakter.v_manatrank++;
    o_charakter.v_queststand = "Keine Aufgabe aktiv"; o_charakter.v_erfahrungspunkte = o_charakter.v_erfahrungspunkte + 80;
    o_charakter.v_schluessel++; o_charakter.v_questitem = "";
    o_ausgabe.p_writeQueststand ();
    o_ausgabe.p_writeErfahrungspunkte ();
    o_ausgabe.p_writeManatrank ();
  }
  //Quest 4: Blauschuppe finden
  else if ((this.v_quest [4] == 0) && (o_charakter.v_quest == "false"))
  {
    o_fenster.p_writeText (v_questtexte [0], "", v_questtexte [23], "", "");
    this.v_quest [4] = 1; o_charakter.v_quest = "true";
    o_charakter.v_queststand = v_questtexte [24];
    o_ausgabe.p_writeQueststand (); 
  }
  else if ((this.v_quest [4] == 1) && (o_charakter.v_questitem == "Blauschuppe"))
  {
    o_fenster.p_writeText (v_questtexte [28], v_questtexte [29], "", v_questtexte [30], "");
    this.v_quest [4] = 2; o_charakter.v_quest = "false"; o_charakter.v_equest++; o_charakter.v_portalrolle += 2;
    o_charakter.v_queststand = "Keine Aufgabe aktiv"; o_charakter.v_erfahrungspunkte = o_charakter.v_erfahrungspunkte + 100;
    o_charakter.v_schluessel++; o_charakter.v_questitem = "";
    o_ausgabe.p_writeQueststand ();
    o_ausgabe.p_writeErfahrungspunkte ();
    o_ausgabe.p_writePortalrolle ();
  }
  //Quest 5: Riesenkrake töten
  else if ((this.v_quest [5] == 0) && (o_charakter.v_quest == "false"))
  {
    o_fenster.p_writeText (v_questtexte [0], "", v_questtexte [31], "", "");
    this.v_quest [5] = 1; o_charakter.v_quest = "true";
    o_charakter.v_queststand = v_questtexte [32];
    o_ausgabe.p_writeQueststand (); 
  }
  else if ((this.v_quest [5] == 1) && (o_charakter.v_questitem == "Riesenkrake"))
  {
    o_fenster.p_writeText (v_questtexte [33], "", v_questtexte [34], "", "");
    this.v_quest [5] = 2; o_charakter.v_quest = "false"; o_charakter.v_equest++; o_charakter.v_queststand = "Keine Aufgabe aktiv";
    o_charakter.v_questitem = "";
    o_charakter.v_manatrank += 1; o_charakter.v_erfahrungspunkte += 120; o_charakter.v_schluessel++;
    o_ausgabe.p_writeQueststand ();
    o_ausgabe.p_writeErfahrungspunkte ();
    o_ausgabe.p_writeManatrank ();
  }

  //Quest 6: Eichensamen finden
  else if ((this.v_quest [6] == 0) && (o_charakter.v_quest == "false"))
  {
    o_fenster.p_writeText (v_questtexte [0], v_questtexte [35], v_questtexte [36], "", "");
    this.v_quest [6] = 1; o_charakter.v_quest = "true";
    o_charakter.v_queststand = v_questtexte [37];
    o_ausgabe.p_writeQueststand (); 
  }
  else if ((this.v_quest [6] == 1) && (o_charakter.v_questitem == "Eichensamen"))
  {
    o_fenster.p_writeText (v_questtexte [40], "", v_questtexte [41], "", "");
    this.v_quest [6] = 2; o_charakter.v_quest = "false"; o_charakter.v_equest++; o_charakter.v_queststand = "Keine Aufgabe aktiv";
    o_charakter.v_questitem = "";
    o_charakter.v_gold += 150; o_charakter.v_erfahrungspunkte += 150; o_charakter.v_schluessel++;
    o_ausgabe.p_writeQueststand ();
    o_ausgabe.p_writeErfahrungspunkte ();
    o_ausgabe.p_writeGold ();
  }
  //Quest 7: Pilzmensch töten
  else if ((this.v_quest [7] == 0) && (o_charakter.v_quest == "false"))
  {
    o_fenster.p_writeText (v_questtexte [0], v_questtexte [42], "", "", "");
    this.v_quest [7] = 1; o_charakter.v_quest = "true";
    o_charakter.v_queststand = v_questtexte [43];
    o_ausgabe.p_writeQueststand (); 
  }
  else if ((this.v_quest [7] == 1) && (o_charakter.v_questitem == "Pilzmensch"))
  {
    o_fenster.p_writeText (v_questtexte [33], "", v_questtexte [44], "", "");
    this.v_quest [7] = 2; o_charakter.v_quest = "false"; o_charakter.v_equest++; o_charakter.v_queststand = "Keine Aufgabe aktiv";
    o_charakter.v_questitem = "";
    o_charakter.v_heiltrank += 8; o_charakter.v_erfahrungspunkte += 200; o_charakter.v_schluessel++;
    o_ausgabe.p_writeQueststand ();
    o_ausgabe.p_writeErfahrungspunkte ();
    o_ausgabe.p_writeHeiltrank ();
  }
  //Quest 8: Puppengeist töten
  else if ((this.v_quest [8] == 0) && (o_charakter.v_quest == "false"))
  {
    o_fenster.p_writeText (v_questtexte [0], v_questtexte [46], v_questtexte [47], "", "");
    this.v_quest [8] = 1; o_charakter.v_quest = "true";
    o_charakter.v_queststand = v_questtexte [48];
    o_ausgabe.p_writeQueststand (); 
  }
  else if ((this.v_quest [8] == 1) && (o_charakter.v_questitem == "Puppengeist"))
  {
    o_fenster.p_writeText (v_questtexte [33], "", v_questtexte [51], "", "");
    this.v_quest [8] = 2; o_charakter.v_quest = "false"; o_charakter.v_equest++; o_charakter.v_queststand = v_questtexte [50];
    o_charakter.v_questitem = "";
    o_charakter.v_manatrank += 2; o_charakter.v_erfahrungspunkte += 300; o_charakter.v_schluessel++;
    o_ausgabe.p_writeQueststand ();
    o_ausgabe.p_writeErfahrungspunkte ();
    o_ausgabe.p_writeManatrank ();
  }
  //Quest 9: Eisenstein finden
  else if ((this.v_quest [9] == 0) && (o_charakter.v_quest == "false"))
  {
    o_fenster.p_writeText ("Aufgabe:", v_questtexte [52], v_questtexte [53], "", "");
    this.v_quest [9] = 1; o_charakter.v_quest = "true";
    o_charakter.v_queststand = "Eisenstein finden";
    o_ausgabe.p_writeQueststand (); 
  }
  else if ((this.v_quest [9] == 1) && (o_charakter.v_questitem == "Eisenstein")) 
  {
    o_fenster.p_writeText (v_questtexte [33], "", v_questtexte [54], "", "");
    this.v_quest [9] = 2; o_charakter.v_quest = "false"; o_charakter.v_equest++; o_charakter.v_queststand = "Keine Aufgabe aktiv";
    o_charakter.v_questitem = "";
    o_charakter.v_gold += 450; o_charakter.v_erfahrungspunkte += 250; o_charakter.v_schluessel++;
    o_ausgabe.p_writeQueststand ();
    o_ausgabe.p_writeErfahrungspunkte ();
    o_ausgabe.p_writeGold ();
  }
  //Quest 10: Steinriese töten
  else if ((this.v_quest [10] == 0) && (o_charakter.v_quest == "false"))
  {
    o_fenster.p_writeText ("Aufgabe:", v_questtexte [55], v_questtexte [56], "", "");
    this.v_quest [10] = 1; o_charakter.v_quest = "true";
    o_charakter.v_queststand = "Steinriese töten";
    o_ausgabe.p_writeQueststand (); 
  }
  else if ((this.v_quest [10] == 1) && (o_charakter.v_questitem == "Steinriese")) 
  {
    o_fenster.p_writeText (v_questtexte [33], "", v_questtexte [57], "", "");
    this.v_quest [10] = 2; o_charakter.v_quest = "false"; o_charakter.v_equest++; o_charakter.v_queststand = "Keine Aufgabe aktiv";
    o_charakter.v_questitem = "";
    o_charakter.v_portalrolle++; o_charakter.v_manatrank++, o_charakter.v_erfahrungspunkte += 400; o_charakter.v_schluessel++;
    o_ausgabe.p_writeQueststand ();
    o_ausgabe.p_writeErfahrungspunkte ();
    o_ausgabe.p_writePortalrolle ();
    o_ausgabe.p_writeManatrank ();
  }
  //Quest 11: Seherkugel finden
  else if ((this.v_quest [11] == 0) && (o_charakter.v_quest == "false"))
  {
    o_fenster.p_writeText ("Aufgabe:", v_questtexte [58], v_questtexte [59], "", "");
    this.v_quest [11] = 1; o_charakter.v_quest = "true";
    o_charakter.v_queststand = "Seherkugel finden";
    o_ausgabe.p_writeQueststand (); 
  }
  else if ((this.v_quest [11] == 1) && (o_charakter.v_questitem == "Seherkugel")) 
  {
    o_fenster.p_writeText (v_questtexte [33], "", v_questtexte [60], "", "");
    this.v_quest [11] = 2; o_charakter.v_quest = "false"; o_charakter.v_equest++; o_charakter.v_queststand = "Keine Aufgabe aktiv";
    o_charakter.v_questitem = "";
    o_charakter.v_gold += 300; ; o_charakter.v_heiltrank +=3; o_charakter.v_erfahrungspunkte += 250; o_charakter.v_schluessel++;
    o_ausgabe.p_writeQueststand ();
    o_ausgabe.p_writeErfahrungspunkte ();
    o_ausgabe.p_writeGold ();
    o_ausgabe.p_writeHeiltrank ();
  }
  //Quest 12: Basilisk töten
  else if ((this.v_quest [12] == 0) && (o_charakter.v_quest == "false"))
  {
    o_fenster.p_writeText ("Aufgabe:", v_questtexte [63], v_questtexte [64], "", "");
    this.v_quest [12] = 1; o_charakter.v_quest = "true";
    o_charakter.v_queststand = "Basilisk töten";
    o_ausgabe.p_writeQueststand (); 
  }
  else if ((this.v_quest [12] == 1) && (o_charakter.v_questitem == "Basilisk")) 
  {
    o_fenster.p_writeText (v_questtexte [33], "", v_questtexte [65], "", "");
    this.v_quest [12] = 2; o_charakter.v_quest = "false"; o_charakter.v_equest++; o_charakter.v_queststand = "Keine Aufgabe aktiv";
    o_charakter.v_questitem = "";
    o_charakter.v_portalrolle += 2; ; o_charakter.v_heiltrank +=5; o_charakter.v_erfahrungspunkte += 500; o_charakter.v_schluessel++;
    o_ausgabe.p_writeQueststand ();
    o_ausgabe.p_writeErfahrungspunkte ();
    o_ausgabe.p_writeGold ();
    o_ausgabe.p_writeHeiltrank ();
  }

  //wenn Quest aktiv
  else if (o_charakter.v_quest == "true")
  {
    o_fenster.p_writeText (v_questtexte [3], "", "", "", "");
  }

  else
  {
    o_fenster.p_writeText (v_questtexte [17], "", "", "","");
  }
}

c_questen.prototype.p_kampfquest = function ()
{
  if (v_zone == "Bosskampf")
  {
    if (o_gegner.v_name == "Rattenmensch")
    {
      o_questen.v_quest [3] = 1; o_charakter.v_quest = "true";
      o_charakter.v_queststand = "Rattenmensch getötet"; o_charakter.v_questitem = "Rattenmensch";
      o_ausgabe.p_writeQueststand ();   
    } 
    else if (o_gegner.v_name == "Riesenkrake")
    {
      o_questen.v_quest [5] = 1; o_charakter.v_quest = "true";
      o_charakter.v_queststand = "Riesenkrake getötet"; o_charakter.v_questitem = "Riesenkrake";
      o_ausgabe.p_writeQueststand ();
    } 
    else if (o_gegner.v_name == "Pilzmensch")
    {
      o_questen.v_quest [7] = 1; o_charakter.v_quest = "true";
      o_charakter.v_queststand = "Pilzmensch getötet"; o_charakter.v_questitem = "Pilzmensch";
      o_ausgabe.p_writeQueststand ();
    }
    else if (o_gegner.v_name == "Puppengeist")
    {
      o_questen.v_quest [8] = 1; o_charakter.v_quest = "true";
      o_charakter.v_queststand = v_questtexte [49]; o_charakter.v_questitem = "Puppengeist";
    }
    else if (o_gegner.v_name == "Steinriese")
    {
      o_questen.v_quest [10] = 1; o_charakter.v_quest = "true";
      o_charakter.v_queststand = "Steinriese getötet"; o_charakter.v_questitem = "Steinriese";
      o_ausgabe.p_writeQueststand ();
    }
    else if (o_gegner.v_name == "Basilisk")
    {
      o_questen.v_quest [12] = 1; o_charakter.v_quest = "true";
      o_charakter.v_queststand = "Basilisk getötet"; o_charakter.v_questitem = "Basilisk";
      o_ausgabe.p_writeQueststand ();
    }
    o_ausgabe.p_writeQueststand ();
  }
}
