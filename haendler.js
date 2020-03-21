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

function c_haendler () {}

c_haendler.prototype.p_start = function ()
{
  v_zone = "Haendler";
  o_gui.p_enableGuiHaendler ();
  document.getElementById ("ButtonVerlassen").style.left = "380px";
  document.getElementById ("spielersprite").style.visibility = "hidden";
}

c_haendler.prototype.p_kaufen = function ()
{
  var v_anzahlHeiltrank = 0;
  var v_anzahlManatrank = 0;
  var v_anzahlPortalrolle = 0;
  var v_anzahlProviant = 0;
  var v_preisGesamt = 0;

  //Anzahl holen
  v_anzahlHeiltrank = parseInt (document.getElementById ("KaufHeiltrank").value);
  v_anzahlManatrank = parseInt (document.getElementById ("KaufManatrank").value);
  v_anzahlPortalrolle = parseInt (document.getElementById ("KaufPortalrolle").value);
  v_anzahlProviant = parseInt (document.getElementById ("KaufProviant").value);
  
  v_preisGesamt = (v_preiseHeiltrank [o_charakter.v_stufe] * v_anzahlHeiltrank) + (v_preiseManatrank [o_charakter.v_stufe] * v_anzahlManatrank) + (v_preisePortalrolle [o_charakter.v_stufe] * v_anzahlPortalrolle) + (v_preiseProviant [o_charakter.v_stufe] *  v_anzahlProviant);

  if (v_preisGesamt > o_charakter.v_gold)
  {
    o_sound.p_play (1);
    o_fenster.p_drawWindow ();
    o_fenster.p_writeText (v_texte [21], "", "", "", "");
  }
  else if (v_preisGesamt == 0)
  {
    o_sound.p_play (1);
    o_fenster.p_drawWindow ();
    o_fenster.p_writeText (v_texte [20], "", "", "", "");
  }
  else
  {
    o_sound.p_play (3); 
    o_fenster.p_drawWindow ();
    o_fenster.p_writeText (v_texte [22] + v_preisGesamt + v_texte [23], "", "", "", "");

    document.getElementById ("KaufHeiltrank").value = 0;
    document.getElementById ("KaufManatrank").value = 0;
    document.getElementById ("KaufPortalrolle").value = 0;
    document.getElementById ("KaufProviant").value = 0;

    o_charakter.v_gold = o_charakter.v_gold - v_preisGesamt;
    
    o_charakter.v_heiltrank = o_charakter.v_heiltrank + v_anzahlHeiltrank;
    o_charakter.v_manatrank = o_charakter.v_manatrank + v_anzahlManatrank;
    o_charakter.v_portalrolle = o_charakter.v_portalrolle + v_anzahlPortalrolle;
    o_charakter.v_proviant = o_charakter.v_proviant + v_anzahlProviant;

    o_ausgabe.p_writeGold ();
    o_ausgabe.p_writeHeiltrank ();
    o_ausgabe.p_writeManatrank ();
    o_ausgabe.p_writePortalrolle ();
    o_ausgabe.p_writeProviant ();
  }
}
