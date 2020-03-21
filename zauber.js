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

function c_zauber () 
{
  this.v_anregnenSprite = new Image ();
  this.v_sporenSprite = new Image ();
  this.v_umwandlungSprite = new Image ();
}

c_zauber.prototype.p_init = function () 
{
    
}

//Zauber Regnen
c_zauber.prototype.p_regnen = function ()
{
  if (o_charakter.v_regnen == "aktiv")
  {
    if (o_charakter.v_manapunkte >= 2)
    {
      document.getElementById ("spielersprite").src = "daten/gfk/zauber/regnen.png"
      o_charakter.v_manapunkte -= 2;
      o_charakter.v_lebenspunkte = o_charakter.v_mlebenspunkte;
      o_gui.p_hideAllButtons ();
      keylock = true;

      setTimeout (function ()
      {
        keylock = false;

        if ((v_zone == "Kampf") || (v_zone == "Bosskampf") || (v_zone == "Gebiet"))
        {
          o_gui.p_visibleItemButtons ();
          o_gui.p_visibleZaubernButtons ();
          document.getElementById ("ButtonVerlassen").style.visibility = "visible";
          document.getElementById ("ButtonI").style.visibility = "visible";
        }
        if (v_zone == "Gebiet") { o_gui.p_visibleMoveButtons (); }
      
        if (o_charakter.v_klasse == "Krieger") { document.getElementById ("spielersprite").src = "daten/gfk/spieler/Krieger-1.png" }
        else if (o_charakter.v_klasse == "Dieb") { document.getElementById ("spielersprite").src = "daten/gfk/spieler/Dieb-1.png" }
        else if (o_charakter.v_klasse == "Zauberer") { document.getElementById ("spielersprite").src = "daten/gfk/spieler/Zauberer-1.png" }

        if ((v_zone == "Kampf") || (v_zone == "Bosskampf")) 
        { 
          o_kampf.p_lebensleiste (); 
          o_kampf.p_angriffGegner ();
        }

        o_ausgabe.p_writeManapunkte ();
        o_ausgabe.p_writeLebenspunkte ();
      }, 600);
    }
    else
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText (v_texte [24], "", "", "", "");
    }
  } 
}

//Zauber Sporen
c_zauber.prototype.p_sporen = function ()
{
  let v_zufall = 0;

  if (o_charakter.v_sporen == "aktiv")
  {
    if (o_charakter.v_manapunkte >= 2)
    {
      if ((v_zone == "Kampf") || (v_zone == "Bosskampf"))
      {
        o_gui.p_hideAllButtons ();
        o_charakter.v_manapunkte -= 2;
        document.getElementById ("gegnersprite").src = "daten/gfk/zauber/sporen.png"

        v_zufall = f_randomize (1, 8);
        o_gegner.v_lebenspunkte -= v_zufall;
        console.log ("Schaden des Spielers:" + v_zufall);

        setTimeout (function ()
        {
          o_gui.p_visibleItemButtons ();
          o_gui.p_visibleZaubernButtons ();
          document.getElementById ("ButtonVerlassen").style.visibility = "visible";
          document.getElementById ("ButtonI").style.visibility = "visible";

          document.getElementById ("gegnersprite").src = o_gegner.v_sprite;

          o_ausgabe.p_writeManapunkte ();
          o_ausgabe.p_writeLebenspunkte ();

          if (o_gegner.v_lebenspunkte > 0)
          {
            o_kampf.p_angriffGegner ();
          }

          if (o_gegner.v_lebenspunkte <= 0)
          {
            o_kampf.p_kampfend ();
        
            setTimeout (function ()
            {
               o_musik.p_stop (4); o_sound.p_stop (2);
              o_kampf.p_kampfclear ();
              o_musik.p_play (1);
            }, 4000);
          }

        }, 600)
      }
    }
    else 
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText (v_texte [24], "", "", "", "");
    }
  }
}

//Zauber Umwandlung
c_zauber.prototype.p_umwandlung = function ()
{
  if (o_charakter.v_umwandlung == "aktiv")
  {
    if ((o_charakter.v_lebenspunkte >= 16) && (o_charakter.v_manapunkte != o_charakter.v_mmanapunkte)) 
    {
      document.getElementById ("spielersprite").src = "daten/gfk/zauber/umwandlung.png"
      o_charakter.v_lebenspunkte -= 15;
      o_charakter.v_manapunkte += 1;
      o_gui.p_hideAllButtons ();
      keylock = true;

      setTimeout (function ()
      {
        keylock = false;

        if ((v_zone == "Kampf") || (v_zone == "Bosskampf") || (v_zone == "Gebiet"))
        {
          o_gui.p_visibleItemButtons ();
          o_gui.p_visibleZaubernButtons ();
          document.getElementById ("ButtonVerlassen").style.visibility = "visible";
          document.getElementById ("ButtonI").style.visibility = "visible";
        }
        if (v_zone == "Gebiet") { o_gui.p_visibleMoveButtons (); }
      
        if (o_charakter.v_klasse == "Krieger") { document.getElementById ("spielersprite").src = "daten/gfk/spieler/Krieger-1.png" }
        else if (o_charakter.v_klasse == "Dieb") { document.getElementById ("spielersprite").src = "daten/gfk/spieler/Dieb-1.png" }
        else if (o_charakter.v_klasse == "Zauberer") { document.getElementById ("spielersprite").src = "daten/gfk/spieler/Zauberer-1.png" }

        if ((v_zone == "Kampf") || (v_zone == "Bosskampf")) 
        { 
          o_kampf.p_lebensleiste (); 
          o_kampf.p_angriffGegner ();
        }

        o_ausgabe.p_writeManapunkte ();
        o_ausgabe.p_writeLebenspunkte ();
      }, 600);
    }
    else
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText ("Der Zauber kann nicht gewirkt werden!" , "", "", "", "");
    }
  }
}
