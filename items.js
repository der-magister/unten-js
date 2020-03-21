//   Unten - ein Rollenspiel im Retrodesign
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

function c_heiltrank () {}

c_heiltrank.prototype.p_benutzHeiltrank = function ()
{
  //wenn keine Heiltränke vorhanden
  if (o_charakter.v_heiltrank <= 0)
  {
    o_fenster.p_drawWindow ();
    o_fenster.p_writeText (v_texte [15], "", "", "", "");
  } 

  //wenn Lebenspunkte voll
  else if (o_charakter.v_lebenspunkte == o_charakter.v_mlebenspunkte)
  {
    o_fenster.p_drawWindow ();
    o_fenster.p_writeText (v_texte [16], "", "", "", "");
  }
  //wenn Lebenspunkte nicht voll
  else if (o_charakter.v_lebenspunkte < o_charakter.v_mlebenspunkte)
  {
    o_sound.p_play (4); 
    v_keylock = true; o_gui.p_hideAllButtons ();

    if (o_charakter.v_mlebenspunkte / 2 + o_charakter.v_lebenspunkte  > o_charakter.v_mlebenspunkte)
    {
      o_charakter.v_lebenspunkte = o_charakter.v_mlebenspunkte;
    }
    else
    {
      o_charakter.v_lebenspunkte = Math.round (o_charakter.v_mlebenspunkte / 2 + o_charakter.v_lebenspunkte);
    }
    o_charakter.v_heiltrank = o_charakter.v_heiltrank - 1;
    
    switch (o_charakter.v_klasse)
    {
      case "Krieger": document.getElementById ("spielersprite").src = "daten/gfk/spieler/Krieger-2.png"; break; 
      case "Dieb": document.getElementById ("spielersprite").src = "daten/gfk/spieler/Dieb-2.png"; break;
      case "Zauberer": document.getElementById ("spielersprite").src = "daten/gfk/spieler/Zauberer-2.png"; break;
    }
    
    setTimeout (function ()
    {
      switch (o_charakter.v_klasse)
      {
        case "Krieger": document.getElementById ("spielersprite").src = "daten/gfk/spieler/Krieger-1.png"; break; 
        case "Dieb": document.getElementById ("spielersprite").src = "daten/gfk/spieler/Dieb-1.png"; break;
        case "Zauberer": document.getElementById ("spielersprite").src = "daten/gfk/spieler/Zauberer-1.png"; break;
      }

      if ((v_zone == "Kampf") || (v_zone == "Bosskampf")) 
      {
        o_gui.p_visibleItemButtons ();
        o_gui.p_visibleZaubernButtons ();
        document.getElementById ("ButtonI").style.visibility = "visible";
        document.getElementById ("ButtonVerlassen").style.visibility = "visible";
        o_kampf.p_lebensleiste ();        
        o_kampf.p_angriffGegner ();
      }
      else
      {
        o_gui.p_visibleAllButtons ();
      }

    }, 
    800);

    o_ausgabe.p_writeLebenspunkte ();
    o_ausgabe.p_writeHeiltrank ();

  }
  v_keylock = false;
} 

c_heiltrank.prototype.p_wuerfleHeiltrank = function ()
{
  var v_zufall = 0;

  console.log ("Würfle auf Heiltrank");

  v_zufall = f_randomize (1, 100);

  console.log (v_zufall);

  if (v_zufall <= 50)
  {
    v_enginecanvas_context.fillText (v_kampftexte [6], 80, 110);
    o_charakter.v_heiltrank++;
    o_ausgabe.p_writeHeiltrank ();
  }
}

function c_manatrank () {}

//Manatrank benutzen
c_manatrank.prototype.p_benutzManatrank = function ()
{
  //wenn keine Manatränke vorhanden
  if (o_charakter.v_manatrank <= 0)
  {
    o_fenster.p_drawWindow ();
    o_fenster.p_writeText (v_texte [17], "", "", "", "");
  } 

  //wenn Manapunkte voll
  else if (o_charakter.v_manapunkte == o_charakter.v_mmanapunkte)
  {
    o_fenster.p_drawWindow ();
    o_fenster.p_writeText (v_texte [18], "", "", "", "");
  }
  //wenn Manapunkte nicht voll
  else if (o_charakter.v_manapunkte < o_charakter.v_mmanapunkte)
  {
    o_sound.p_play (4); 
    o_charakter.v_manapunkte++;
    o_charakter.v_manatrank--;
    
    switch (o_charakter.v_klasse)
    {
      case "Krieger": document.getElementById ("spielersprite").src = "daten/gfk/spieler/Krieger-3.png"; break; 
      case "Dieb": document.getElementById ("spielersprite").src = "daten/gfk/spieler/Dieb-3.png"; break;
      case "Zauberer": document.getElementById ("spielersprite").src = "daten/gfk/spieler/Zauberer-3.png"; break;
    }
    
    setTimeout (function ()
    {
      switch (o_charakter.v_klasse)
      {
        case "Krieger": document.getElementById ("spielersprite").src = "daten/gfk/spieler/Krieger-1.png"; break; 
        case "Dieb": document.getElementById ("spielersprite").src = "daten/gfk/spieler/Dieb-1.png"; break;
        case "Zauberer": document.getElementById ("spielersprite").src = "daten/gfk/spieler/Zauberer-1.png"; break;
      }

      if ((v_zone == "Kampf") || (v_zone == "Bosskampf")) 
      {
        o_gui.p_visibleItemButtons ();
        o_gui.p_visibleZaubernButtons ();
        document.getElementById ("ButtonI").style.visibility = "visible";
        document.getElementById ("ButtonVerlassen").style.visibility = "visible";
        o_kampf.p_lebensleiste ();        
        o_kampf.p_angriffGegner ();
      }
      else
      {
        o_gui.p_visibleAllButtons ();
      }
    }, 
    800);

    o_ausgabe.p_writeManapunkte ();
    o_ausgabe.p_writeManatrank ();
  }
}

function c_medizintrank () {}

c_medizintrank.prototype.p_benutzMedizintrank = function ()
{
  //wenn keine Medizintränke vorhanden
  if (o_charakter.v_medizintrank <= 0)
  {
    o_fenster.p_drawWindow ();
    o_fenster.p_writeText ("Keine Medizintränke vorhanden!", "", "", "", "");
  } 

  //wenn Manapunkte voll
  else if (o_charakter.v_manapunkte == o_charakter.v_mmanapunkte)
  {
    o_fenster.p_drawWindow ();
    o_fenster.p_writeText (v_texte [18], "", "", "", "");
  }
  //wenn Manapunkte nicht voll
  else if (o_charakter.v_manapunkte < o_charakter.v_mmanapunkte)
  {
    o_sound.p_play (4); 
    o_charakter.v_manapunkte++;
    o_charakter.v_manatrank--;
    
    switch (o_charakter.v_klasse)
    {
      case "Krieger": document.getElementById ("spielersprite").src = "daten/gfk/spieler/Krieger-9.png"; break; 
      case "Dieb": document.getElementById ("spielersprite").src = "daten/gfk/spieler/Dieb-9.png"; break;
      case "Zauberer": document.getElementById ("spielersprite").src = "daten/gfk/spieler/Zauberer-9.png"; break;
    }
    
    setTimeout (function ()
    {
      switch (o_charakter.v_klasse)
      {
        case "Krieger": document.getElementById ("spielersprite").src = "daten/gfk/spieler/Krieger-1.png"; break; 
        case "Dieb": document.getElementById ("spielersprite").src = "daten/gfk/spieler/Dieb-1.png"; break;
        case "Zauberer": document.getElementById ("spielersprite").src = "daten/gfk/spieler/Zauberer-1.png"; break;
      }

      if ((v_zone == "Kampf") || (v_zone == "Bosskampf")) 
      {
        o_gui.p_visibleItemButtons (4);
        o_gui.p_visibleZaubernButtons ();
        document.getElementById ("ButtonI").style.visibility = "visible";
        document.getElementById ("ButtonVerlassen").style.visibility = "visible";
        o_kampf.p_lebensleiste ();        
        o_kampf.p_angriffGegner ();
      }
      else
      {
        o_gui.p_visibleAllButtons ();
      }
    }, 
    800);

    o_ausgabe.p_writeManapunkte ();
    o_ausgabe.p_writeManatrank ();
  }
}

c_manatrank.prototype.p_wuerfleManatrank = function ()
{
  var v_zufall = 0;

  console.log ("Würfle auf Manatrank");

  v_zufall = f_randomize (1, 100);

  console.log (v_zufall);

  if (v_zufall <= 12)
  {
    v_enginecanvas_context.fillText (v_kampftexte [7], 80, 110);
    o_charakter.v_manatrank++;
    o_ausgabe.p_writeManatrank ();
  }
} 

function c_portalrolle () {}

c_portalrolle.prototype.p_benutzPortalrolle = function ()
{
  if (o_charakter.v_portalrolle > 0)
  {
    //Teleport ins Dorf
    if (v_zone == "Gebiet")
    {
      o_musik.p_stop (1);
      v_keylock = true;
      o_gui.p_hideAllButtons ();
      v_lvl = 1;
      f_leveldaten ();
      o_engine.v_tileset = "dorf";
      o_engine.p_drawMap (o_engine.v_tileset, true);
      o_charakter.v_mxk = 16; o_charakter.v_myk = 12;
      o_charakter.p_setSprite (330, 250);
      v_statuscanvas_context.clearRect (0, 0, 420, 420);
      o_charakter.v_portalrolle--;
      o_portale.p_draw ();
      o_ausgabe.p_writePortalrolle ();
      o_ausgabe.p_writeKoords ();
      o_ausgabe.p_writeLevel ();
      v_keylock = false;
      o_gui.p_visibleAllButtons ();
      o_musik.p_play (0);
    }
    //Im Kampf - Teleport aus Kampf
    else if ((v_zone == "Kampf") || (v_zone == "Bosskampf"))
    {
      o_musik.p_stopAll ();
      v_keylock = true;
      o_gui.p_hideAllButtons ();
      f_leveldaten ();
      o_engine.p_drawMap (o_engine.v_tileset, false);
      o_charakter.p_setSprite (o_charakter.v_xk, o_charakter.v_yk);
      v_statuscanvas_context.clearRect (0, 0, 420, 420);
      o_charakter.v_portalrolle--;
      o_ausgabe.p_writePortalrolle ();
      v_keylock = false;
      o_gui.p_visibleAllButtons ();
      document.getElementById ("gegnersprite").style.visibility = "hidden";
      o_schlachtfelder.p_status ();
      o_truhen.p_status ();
      o_musik.p_play (1);
    }
  }
  else
  {
    o_fenster.p_drawWindow ();
    o_fenster.p_writeText (v_texte [8], "", "", "", "");
  } 
}

//Würfelt nach Item Portalrolle nach Kampf
c_portalrolle.prototype.p_wuerflePortalrolle = function ()
{
  var v_zufall = 0;

  console.log ("Würfle auf Portalrolle");

  v_zufall = f_randomize (1, 100);

  console.log (v_zufall);

  if (v_zufall <= 15)
  {
    v_enginecanvas_context.fillText (v_kampftexte [8], 80, 110);
    o_charakter.v_portalrolle++;
    o_ausgabe.p_writePortalrolle ();
  }
}
