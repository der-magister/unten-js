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

function c_kampf () 
{
  this.v_kboss = "kein";
}

//Lebensleiste des Spieler
c_kampf.prototype.p_lebensleiste = function ()
{
  v_enginecanvas_context.fillStyle ="#00FF00";

    if (o_charakter.v_lebenspunkte <= o_charakter.v_mlebenspunkte / 2) 
    {
       v_enginecanvas_context.fillStyle ="#FFFF00";
    }
    if (o_charakter.v_lebenspunkte <= o_charakter.v_mlebenspunkte / 4)
    {
      v_enginecanvas_context.fillStyle ="#FF0000";
    }

    v_enginecanvas_context.beginPath ();
    v_enginecanvas_context.fillRect (180, 370, 2, 20);
    v_enginecanvas_context.fillStyle = "black";
    v_enginecanvas_context.closePath ();
}

//lädt Hintergrundbild und setzt Lebensleiste
c_kampf.prototype.p_init = function ()
{
  if (this.v_kboss == "kein")
  {
    v_background.src = "daten/gfk/kampf/hintergruende/hintergrund-" + o_engine.v_tileset + ".png";
  }
  else
  {
    v_background.src = "daten/gfk/kampf/hintergruende/hintergrund-" + o_engine.v_tileset.substring (0, o_engine.v_tileset.length - 1) + ".png";
  }
               
  v_background.onload = function ()
  {
    v_enginecanvas_context.drawImage (v_background, 0 , 0);
    o_kampf.p_lebensleiste ();
  } 
}

c_kampf.prototype.p_start = function (v_boss)
{
  var v_zufall = 0;

  this.v_kboss = v_boss;

  o_gui.p_hideAllButtons ();

  o_musik.p_stop (1);

  if (v_boss == "kein")
  {
    o_musik.p_play (2);
  }
  else 
  {
    o_musik.p_play (3);
  }

  v_keylock = true;
  v_enginecanvas_context.fillStyle ="white";
  v_enginecanvas_context.font = "12px Arial";
  v_enginecanvas_context.textBaseline = "middle";
    
  v_zone = "Kampf";

  v_statuscanvas.style.visibility = "hidden";
  document.getElementById ("spielersprite").style.left = "200px";
  document.getElementById ("spielersprite").style.top = "380px";

  o_ausgabe.p_writeSchlachtfeldNummer ();

  //Wahl des Gegners
  if (v_boss == "kein")
  {
    if (v_lvl <= 3) { v_zufall = f_randomize (0, 1); }
    else if ((v_lvl >=4) && (v_lvl <= 5)) { v_zufall = f_randomize (0, 2); }
    else if ((v_lvl >= 6) && (v_lvl <= 9)) { v_zufall = f_randomize (0, 4);}
    else if ((v_lvl >= 11) && (v_lvl <= 14)) { v_zufall = f_randomize (6, 7); }
    else if ((v_lvl >= 16) && (v_lvl <= 21)) { v_zufall = f_randomize (9, 10); }
    else if ((v_lvl >= 23) && (v_lvl <= 25)) { v_zufall = f_randomize (12, 13); }
    else if ((v_lvl >= 26) && (v_lvl <= 30)) { v_zufall = f_randomize (15, 16); }
    else if ((v_lvl >= 33) && (v_lvl <= 39)) { v_zufall = f_randomize (18, 20); }
    else if ((v_lvl >= 40) && (v_lvl <= 49)) { v_zufall = f_randomize (22, 24); }
  }

  //Bei Bosskampf, Gegner über Parameter
  if (v_boss == "Rattenmensch") { v_zufall = 5; }
  if (v_boss == "Riesenkrake") { v_zufall = 8; }
  if (v_boss == "Pilzmensch") { v_zufall = 11; }
  if (v_boss == "Puppengeist") { v_zufall = 14; }
  if (v_boss == "Steinriese") { v_zufall = 17; }
  if (v_boss == "Basilisk") { v_zufall = 21; }

  o_gegner.p_prepare (v_zufall);

  document.getElementById ("spielersprite").style.visibility = "hidden";
  v_enginecanvas_context.clearRect (0, 0, 420, 420);

  if (v_boss == "kein")
  {
    v_zufall = f_randomize (1, 20);

    if (v_zufall <= 10) 
    { 
      v_enginecanvas_context.fillText (o_gegner.v_name + v_kampftexte [0], 80, 50); 
    }
    else
    { 
      v_enginecanvas_context.fillText (o_gegner.v_name + v_kampftexte [1], 80, 50); 
    }

    document.getElementById ("gegnersprite").style.top = "330"
    document.getElementById ("gegnersprite").style.left = "200"
    document.getElementById ("gegnersprite").style.width = "20px";
    document.getElementById ("gegnersprite").style.height = "20px";
  }
  else
  {
    v_enginecanvas_context.fillText (v_kampftexte [12] + o_gegner.v_name + v_kampftexte [1], 75, 50);
    
    document.getElementById ("gegnersprite").style.top = "310px";
    document.getElementById ("gegnersprite").style.left = "190px";
    document.getElementById ("gegnersprite").style.height = "40px";
    document.getElementById ("gegnersprite").style.width = "40px";
    
    v_zone = "Bosskampf";
    v_zufall = 11;
  }

  document.getElementById ("ButtonVerlassen").src = "daten/gfk/gui/flucht.png";
  document.getElementById ("ButtonI").src = "daten/gfk/gui/angriff.png";
  document.getElementById ("ButtonI").title = "Angriff";
  document.getElementById ("ButtonVerlassen").title = "Fluchtversuch";
  o_ausgabe.p_writeSchlachtfeldNummer ();
  document.getElementById ("ButtonVerlassen").style.left = "380px";

  //Spieler
  if (v_zufall <= 10)
  {
    setTimeout (function () 
    {
      o_gui.p_visibleItemButtons ();
      o_gui.p_visibleZaubernButtons ();
      document.getElementById ("ButtonVerlassen").style.visibility = "visible";
      document.getElementById ("ButtonI").style.visibility = "visible";      
      document.getElementById ("gegnersprite").style.visibility = "visible";
      document.getElementById ("spielersprite").style.visibility = "visible";
      o_kampf.p_init ();
      v_keylock = false;
    }, 2550);  
  }
  //Gegner
  else if ((v_zufall <= 20) && (v_zufall >= 11)) 
  { 
    setTimeout (function () 
    { 
      document.getElementById ("gegnersprite").style.visibility = "visible";
      document.getElementById ("spielersprite").style.visibility = "visible";
      o_kampf.p_init ();
      o_kampf.p_angriffGegner ();
      v_keylock = false;

    }, 2550);
  }
}

c_kampf.prototype.p_angriffGegner = function ()
{
  let v_zufall = 0;

  v_zufall = f_randomize (1, 10);

  if (o_gegner.v_spezial == "Zweifachschlag")
  {
    if (v_zufall <= 2) 
    {
      o_kampf.p_zweifachschlag ();
    }
    else
    {
      o_kampf.p_attackGegner ();
    }
  }
  else if (o_gegner.v_spezial == "Dreifachschlag")
  {
    if (v_zufall <= 2) 
    {
      o_kampf.p_dreifachschlag ();
    }
    else
    {
      o_kampf.p_attackGegner ();
    }
  }
  else
  {
    o_kampf.p_attackGegner ();
  }
}

//Spezialattacke Zweifachschlag
c_kampf.prototype.p_zweifachschlag = function ()
{
  o_kampf.p_attackGegner ();

  setTimeout (function ()
  {
    o_kampf.p_attackGegner ();
  }, 600);
}

//Spezialattacke Dreifachschlag
c_kampf.prototype.p_dreifachschlag = function ()
{
  console.log ("Dreifachschlag");
  o_kampf.p_attackGegner ();

  setTimeout (function ()
  {
    o_kampf.p_attackGegner ();
    
    setTimeout (function ()
    {
      o_kampf.p_attackGegner ();
      console.log ("---");
    }, 600);

  }, 600);  
}
  
//Angriffsroutine des Gegners
c_kampf.prototype.p_attackGegner = function ()
{
  var v_schaden = 0;
  var v_krit = false;
  var v_zufall = 0;
  
  v_keylock = true; 
  o_gui.p_hideAllButtons ();

  v_zufall = f_randomize (1, 20);

  o_sound.p_play (2);

  if (v_zufall <= o_gegner.v_angriffswert)
  {
    v_schaden = f_randomize (1, o_gegner.v_trefferpunkte) - o_charakter.v_ruestungswert - o_charakter.v_schildwert;
    
    if (v_zufall == 1)
    {
      if (v_schaden > 0)
      {
        o_charakter.v_lebenspunkte = o_charakter.v_lebenspunkte - (2 * v_schaden);
        v_krit = true;
        this.p_lebensleiste ();
      }
    }
    else 
    {
      if (v_schaden > 0)
      {
        o_charakter.v_lebenspunkte = o_charakter.v_lebenspunkte - v_schaden;  
        this.p_lebensleiste ();
      }
    }
    
    o_ausgabe.p_writeLebenspunkte ();

    //wenn Schaden <= 0, dann Blockanzeige
    if (v_schaden <= 0)
    {
      document.getElementById ("blocksprite").style.left ="200px";
      document.getElementById ("blocksprite").style.top ="380px";
      document.getElementById ("blocksprite").style.visibility = "visible";
    }

    //wenn Schaden > 0, dann Trefferanzeige
    else if (v_schaden > 0)
    {
      if (v_krit == true)
      {
        document.getElementById ("kritsprite").style.left ="200px";
        document.getElementById ("kritsprite").style.top ="380px";
        document.getElementById ("kritsprite").style.visibility = "visible";
        v_krit = false;
      }
      else
      {
        document.getElementById ("treffersprite").style.left ="200px";
        document.getElementById ("treffersprite").style.top ="380px";
        document.getElementById ("treffersprite").style.visibility = "visible";
      }
      document.getElementById ("kampfmeldungscanvas").style.left = "225px"
      document.getElementById ("kampfmeldungscanvas").style.top = "380px";
      v_kampfmeldungscanvas_context.clearRect (0, 0, 60, 20);
      v_kampfmeldungscanvas_context.fillText ("-" + v_schaden + " LP", 0, 0);
      document.getElementById ("kampfmeldungscanvas").style.visibility = "visible";
    }
  }
  else if (v_zufall > o_gegner.v_angriffswert)
  {
    document.getElementById ("misssprite").style.left ="200px";
    document.getElementById ("misssprite").style.top ="380px";
    document.getElementById ("misssprite").style.visibility = "visible";
    console.log ("Gegner verfehlt");
  }
  
  setTimeout (function () 
  { 
    document.getElementById ("kritsprite").style.visibility = "hidden";
    document.getElementById ("blocksprite").style.visibility = "hidden";
    document.getElementById ("treffersprite").style.visibility = "hidden";
    document.getElementById ("misssprite").style.visibility = "hidden";
    document.getElementById ("kampfmeldungscanvas").style.visibility = "hidden";
   
    v_keylock = false; o_sound.p_stop (2);

    o_gui.p_visibleItemButtons ();
    o_gui.p_visibleZaubernButtons ();
    document.getElementById ("ButtonVerlassen").style.visibility = "visible";
    document.getElementById ("ButtonI").style.visibility = "visible";
    

    if (o_charakter.v_lebenspunkte <= 0)
    {
      o_musik.p_stopAll ();
      o_gui.p_hideAllButtons ();

      o_musik.p_play (5)
      v_enginecanvas_context.clearRect (0, 0, 420, 420);
      v_enginecanvas_context.fillText (v_kampftexte [13], 75, 50);
      document.getElementById ("gegnersprite").style.visibility = "hidden";
      document.getElementById ("spielersprite").style.visibility = "hidden";

      setTimeout (function ()
      {
        o_musik.p_stop (5);

        document.getElementById ("musik0").play ();
        keylock = true;
        document.getElementById ("ButtonVerlassen").title = "Beendet Spiel und geht zum Startbildschirm zurück";
        document.getElementById ("ButtonI").title = "Interaktionen";
        document.getElementById ("ausgabe2canvas").style.visibility = "hidden";
        document.getElementById ("musik0").style.visibility = "hidden";
        o_gui.p_disableAllGame ();
        o_gui.p_enableStartscreen ();
        v_textName.value = "Hier Charakternamen eingeben";
      }, 6500);

    }
  }, 500);
}

//Angriffsroutine des Spielers
c_kampf.prototype.p_angriffSpieler = function ()
{
  var v_schaden = 0;
  var v_zufall = 0;

  v_keylock = true;
  o_gui.p_hideAllButtons ();
  
  v_zufall = f_randomize (1, 20);

  o_sound.p_play (2);

  if (v_zufall <= o_charakter.v_kraft)
  { 
    //bei kritischen Treffer
    if (v_zufall == 1)
    {
      v_schaden = 2 * f_randomize (1, o_charakter.v_trefferpunkte);
      o_gegner.v_lebenspunkte = o_gegner.v_lebenspunkte - v_schaden;
      document.getElementById ("kritsprite").style.left = "200px";
      document.getElementById ("kritsprite").style.top = "330px";
      document.getElementById ("kritsprite").style.visibility = "visible";
    }
    else
    {
      v_schaden = f_randomize (1, o_charakter.v_trefferpunkte);
      o_gegner.v_lebenspunkte = o_gegner.v_lebenspunkte - v_schaden;
      document.getElementById ("treffersprite").style.left = "200px";
      document.getElementById ("treffersprite").style.top = "330px";
      document.getElementById ("treffersprite").style.visibility = "visible";
    }
    
    if (v_zone == "Bosskampf")
    {
      document.getElementById ("kampfmeldungscanvas").style.left = "240px"
      document.getElementById ("kampfmeldungscanvas").style.top = "335px";
    }
    else if (v_zone == "Kampf")
    {
      document.getElementById ("kampfmeldungscanvas").style.left = "225px"
      document.getElementById ("kampfmeldungscanvas").style.top = "330px";
    }
    v_kampfmeldungscanvas_context.clearRect (0, 0, 60, 20);
    v_kampfmeldungscanvas_context.fillText ("-" + v_schaden + " LP", 0, 0);
    document.getElementById ("kampfmeldungscanvas").style.visibility = "visible";
  }
  else if (v_zufall >= o_charakter.v_kraft)
  {
    
    document.getElementById ("misssprite").style.left = "200px";
    document.getElementById ("misssprite").style.top = "330px";
    document.getElementById ("misssprite").style.visibility = "visible";
  }

  setTimeout (function () 
  { 
    var v_zufall = 0;

    document.getElementById ("treffersprite").style.visibility = "hidden";
    document.getElementById ("misssprite").style.visibility = "hidden";
    document.getElementById ("kritsprite").style.visibility = "hidden";
    o_gui.p_visibleItemButtons ();
    o_gui.p_visibleZaubernButtons ();
    document.getElementById ("ButtonVerlassen").style.visibility = "visible";
    document.getElementById ("ButtonI").style.visibility = "visible";
    document.getElementById ("kampfmeldungscanvas").style.visibility = "hidden";

    if (o_gegner.v_lebenspunkte >= 1)
    { 
      o_kampf.p_angriffGegner ();
    }
    else if (o_gegner.v_lebenspunkte <= 0)
    {
      o_kampf.p_kampfend ();

      setTimeout (function ()
      {
        o_musik.p_stop (4); o_sound.p_stop (2);
        o_kampf.p_kampfclear ();
        o_musik.p_play (1);

      }, 4000);
    }

  }, 500);
}

c_kampf.prototype.p_kampfend = function ()
{
  if (o_kampf.v_kboss == "kein")
  {
    o_musik.p_stop (2);
  }
  else 
  {
    o_musik.p_stop (3);
  }
  
  for (let v_i = 1; v_i <= 10; v_i++)
  {
    o_musik.p_stop (v_i);
  }
  
  o_musik.p_play (4);

  o_gui.p_hideAllButtons ();

  document.getElementById ("ButtonVerlassen").src = "daten/gfk/gui/beenden.png";
  document.getElementById ("ButtonI").src = "daten/gfk/gui/interaktion.png";

  v_enginecanvas_context.clearRect (0, 0, 420, 420);
  v_enginecanvas_context.fillStyle ="white";
  v_enginecanvas_context.fillText (v_kampftexte [2], 80, 50);
  v_enginecanvas_context.fillText (o_gegner.v_erfahrungspunkte + v_kampftexte [4], 80, 70);
  v_enginecanvas_context.fillText (o_gegner.v_gold + v_kampftexte [5], 80, 90);

  v_zufall = f_randomize (1, 30);

  if (v_zufall <= 10) 
  { 
    o_heiltrank.p_wuerfleHeiltrank (); 
  }
  else if ((v_zufall >= 10) && (v_zufall <= 20))
  {
    o_manatrank.p_wuerfleManatrank ();
  }
  else if (v_zufall >= 20)
  {
    o_portalrolle.p_wuerflePortalrolle ();
  }

  o_charakter.v_erfahrungspunkte = o_charakter.v_erfahrungspunkte + o_gegner.v_erfahrungspunkte;
  o_charakter.v_gold = o_charakter.v_gold + o_gegner.v_gold;
  o_schlachtfelder.v_etage [v_schlachtfeld]--; 

  if (o_schlachtfelder.v_etage [v_schlachtfeld] <= 0)
  {
    v_enginecanvas_context.fillText (v_kampftexte [11], 80, 250);
  }

  if (o_charakter.v_erfahrungspunkte >= v_stufenschwelle [o_charakter.v_stufe])
  {
    o_charakter.v_stufe++;
    o_charakter.v_mlebenspunkte = o_charakter.v_mlebenspunkte + 8;
    o_charakter.v_lebenspunkte = o_charakter.v_mlebenspunkte;

    v_enginecanvas_context.fillText (v_texte [9], 80, 130);
    v_enginecanvas_context.fillText (v_texte [10], 80, 150);
    o_ausgabe.p_writeStufe ();
    o_ausgabe.p_writeLebenspunkte ();

    if ((o_charakter.v_stufe == 3) || (o_charakter.v_stufe == 6) || (o_charakter.v_stufe == 9) || (o_charakter.v_stufe == 12) ||    
        (o_charakter.v_stufe == 15))
    {
      o_charakter.v_mmanapunkte++;
      o_charakter.v_manapunkte = o_charakter.v_mmanapunkte;
      v_enginecanvas_context.fillText (v_texte [11], 80, 170);
      o_ausgabe.p_writeManapunkte ();
    }

    if ((o_charakter.v_stufe == 5) || (o_charakter.v_stufe == 10) || (o_charakter.v_stufe == 15) || (o_charakter.v_stufe == 20) || 
        (o_charakter.v_stufe == 25))
    {
      o_charakter.v_kraft++, o_charakter.v_geschick++; o_charakter.v_klugheit++;
      v_enginecanvas_context.fillText (v_texte [12], 80, 190);
      v_enginecanvas_context.fillText (v_texte [13], 80, 210);
      v_enginecanvas_context.fillText (v_texte [14], 80, 230);
    }
  }

  o_ausgabe.p_writeErfahrungspunkte ();
  o_ausgabe.p_writeGold ();

  document.getElementById ("spielersprite").style.visibility = "hidden";
  document.getElementById ("gegnersprite").style.visibility = "hidden";
  document.getElementById ("ButtonI").disabled = "disabled";

  o_questen.p_kampfquest ();
}

c_kampf.prototype.p_kampfclear = function ()
{
  o_engine.p_drawMap (o_engine.v_tileset, false);
  document.getElementById ("spielersprite").style.left = o_charakter.v_xk + "px";
  document.getElementById ("spielersprite").style.top = o_charakter.v_yk + "px";
  document.getElementById ("spielersprite").style.visibility = "visible";
  v_statuscanvas.style.visibility = "visible";
  document.getElementById ("ButtonI").disabled = "";
  document.getElementById ("ButtonI").title = "Interaktionen";
  document.getElementById ("ButtonVerlassen").title = "Beendet Spiel und geht zum Startbildschirm zurück";
  document.getElementById ("ButtonSpeichern").disabled = "";
  document.getElementById ("ButtonSpeichern").title = "Speichert das aktuelle Spiel (alter Spielstand wird überschrieben!)"; 
  document.getElementById ("ButtonVerlassen").style.left = "630px"; 
  document.getElementById ("ButtonVollbild").style.visibility = "visible";

  if (o_schlachtfelder.v_etage [v_schlachtfeld] == 0) 
  { 
    o_schlachtfelder.v_erledigt [v_schlachtfeld] = 1;
    o_charakter.v_schlachtfelder++;
    o_ausgabe.p_writeSchlachtfelder ();
    o_schlachtfelder.p_status (); 
  }

  v_ausgabe2canvas_context.clearRect (320, 0, 380, 14);

  o_gui.p_visibleAllButtons ();
  v_zone = "Gebiet";
  v_keylock = false;
}
