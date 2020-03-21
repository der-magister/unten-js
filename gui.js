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

function c_gui () {}

c_gui.prototype.p_enableButtons = function ()
{
  this.p_enableMoveButtons ();

  v_buttonHeiltrank.disabled = "";
  v_buttonManatrank.disabled = "";
  v_buttonPortalrolle.disabled = "";

  v_buttonHeiltrank.title = "Benutzt einen Heiltrank";
  v_buttonManatrank.title = "Benutzt einen Manatrank";
  v_buttonPortalrolle.title = "Benutzt eine Portalrolle";

  document.getElementById ("ButtonSpeichern").disabled = "";
  document.getElementById ("ButtonSpeichern").title = "Speichert das aktuelle Spiel (vorheriger Speicherstand wird überschrieben!";
}

c_gui.prototype.p_enableKampfButtons = function ()
{
  v_buttonHeiltrank.disabled = "";
  v_buttonManatrank.disabled = "";
  v_buttonPortalrolle.disabled = "";

  v_buttonHeiltrank.title = "Benutzt einen Heiltrank";
  v_buttonManatrank.title = "Benutzt einen Manatrank";
  v_buttonPortalrolle.title = "Benutzt eine Portalrolle";
  document.getElementById ("ButtonVerlassen").disabled = "";
}

//versteckt alle Canvas
c_gui.prototype.p_disableCanvas = function ()
{
  v_enginecanvas.style.visibility = "hidden";
  v_fenstercanvas.style.visibility = "hidden";
  v_ausgabecanvas.style.visibility = "hidden";
  v_statuscanvas.style.visibility = "hidden";
  v_hintergrundcanvas.style.visibility = "hidden";
  document.getElementById ("ausgabe2canvas").style.visibility = "hidden";
}


//Aktiviert alle Händlerelemente
c_gui.prototype.p_enableGuiHaendler = function ()
{
  this.p_disableCanvas ();
  v_ausgabecanvas.style.visibility = "visible";
  v_fenstercanvas.style.visibility = "visible";
  v_hintergrundcanvas.style.visibility = "visible";
  this.p_hideAllButtons ();
  document.getElementById ("ButtonI").style.visibility = "visible";
  document.getElementById ("ButtonVerlassen").style.visibility = "visible";
  
  document.getElementsByTagName("h3")[0].style.visibility = "visible";

  //aktuelle Preise setzen
  document.getElementById ("PreisHeiltrank").value = "Heiltrank (" + v_preiseHeiltrank [o_charakter.v_stufe] + " Gold/Stück):";
  document.getElementById ("PreisHeiltrank").style.visibility = "visible";
  
  document.getElementById ("PreisManatrank").value = "Manatrank (" + v_preiseManatrank [o_charakter.v_stufe] + " Gold/Stück):";
  document.getElementById ("PreisManatrank").style.visibility = "visible";

  document.getElementById ("PreisPortalrolle").value = "Portalrolle (" + v_preisePortalrolle [o_charakter.v_stufe] + " Gold/Stück):";
  document.getElementById ("PreisPortalrolle").style.visibility = "visible";

  document.getElementById ("PreisProviant").value = "Proviant (" + v_preiseProviant [o_charakter.v_stufe] + " Gold/Stück):";
  document.getElementById ("PreisProviant").style.visibility = "visible";
  
  v_kaufheiltrank.value = 0;
  v_kaufmanatrank.value = 0;
  v_kaufportalrolle.value = 0;
  v_kaufproviant.value = 0;

  v_kaufheiltrank.style.visibility = "visible";
  v_kaufmanatrank.style.visibility = "visible";
  v_kaufportalrolle.style.visibility = "visible";
  v_kaufproviant.style.visibility = "visible";


  v_buttonI.title = "Ausgewählte Gegenstände kaufen";
  v_buttonVerlassen.title = "Händler verlassen";
}

//Deaktiviert alle Händlerelemente
c_gui.prototype.p_disableGuiHaendler = function ()
{
  this.p_visibleAllButtons ();
  document.getElementsByTagName("h3")[0].style.visibility = "hidden";
  document.getElementById ("PreisHeiltrank").style.visibility = "hidden";
  document.getElementById ("PreisManatrank").style.visibility = "hidden";
  document.getElementById ("PreisPortalrolle").style.visibility = "hidden";
  document.getElementById ("PreisProviant").style.visibility = "hidden";

  //canvas sichtbar machen
  v_ausgabecanvas.style.visibility = "visible";
  v_enginecanvas.style.visibility = "visible";
  v_fenstercanvas.style.visibility = "visible";
  v_statuscanvas.style.visibility = "visible";

  //Haendlerbuttons unsichtbar schalten
  v_kaufheiltrank.style.visibility = "hidden";
  v_kaufmanatrank.style.visibility = "hidden";
  v_kaufportalrolle.style.visibility = "hidden";
  v_kaufproviant.style.visibility = "hidden";

  //Button Tooltip unbenennen
  v_buttonI.title = "Interaktion";
  v_buttonVerlassen.title = "Beendet Spiel und geht zum Startbildschirm zurück";
}

c_gui.prototype.p_enableGuiKampf = function ()
{
  this.p_disableMoveButtons ();
  v_buttonI.title = "Angriff";
  v_buttonVerlassen.title = "Flucht";
}

//Deaktiviert alle Ingame-Elemente
c_gui.prototype.p_disableAllGame = function ()
{
  //Canvas unsichtbar
  this.p_disableCanvas ()

  //Buttons unsichtbar
  v_buttonN.style.visibility = "hidden";
  v_buttonS.style.visibility = "hidden";
  v_buttonW.style.visibility = "hidden";
  v_buttonO.style.visibility = "hidden";

  v_buttonI.style.visibility = "hidden";

  v_buttonHeiltrank.style.visibility = "hidden";
  v_buttonManatrank.style.visibility = "hidden";
  document.getElementById ("ButtonMedizintrank").style.visibility ="hidden";
  v_buttonPortalrolle.style.visibility = "hidden";

  v_buttonVerlassen.style.visibility = "hidden";
  document.getElementById ("ButtonSpeichern").style.visibility = "hidden";
  document.getElementById ("ButtonZaubern").style.visibility = "hidden";
  document.getElementById ("Zauberliste").style.visibility = "hidden";
  document.getElementById ("spielersprite").style.visibility = "hidden";
  document.getElementById ("ButtonMusik").style.visibility = "hidden";
  document.getElementById ("ButtonSound").style.visibility = "hidden";
  document.getElementById ("ButtonVollbild").style.visibility = "hidden";
}

//Aktiviert Startbildschirm
c_gui.prototype.p_enableStartscreen = function ()
{
  document.getElementById ("spielersprite").style.visibility = "hidden";

  document.getElementsByTagName("h1")[0].style.visibility = "visible";

  v_textName.style.visibility = "visible";

  document.getElementById ("krieger").style.visibility = "visible";
  document.getElementById ("dieb").style.visibility = "visible";
  document.getElementById ("zauberer").style.visibility = "visible";

  document.getElementsByTagName("label")[0].style.display = "";
  document.getElementsByTagName("label")[1].style.display = "";
  document.getElementsByTagName("label")[2].style.display = "";

  v_buttonNSpiel.style.visibility = "visible";
  v_buttonASpiel.style.visibility = "visible";
  document.getElementById ("kredits").style.visibility = "visible";

  if (o_charakter.v_regnen == "aktiv")
  {
    document.getElementById("Zauberliste").remove (1);
  }

  if (o_charakter.v_sporen == "aktiv")
  {
    document.getElementById("Zauberliste").remove (2);
  }
}

//versteck Bewegungsbuttons
c_gui.prototype.p_hideMoveButtons = function ()
{
  document.getElementById ("ButtonN").style.visibility = "hidden";
  document.getElementById ("ButtonS").style.visibility = "hidden";
  document.getElementById ("ButtonW").style.visibility = "hidden";
  document.getElementById ("ButtonO").style.visibility = "hidden";
}

//Schaltet Bewegungsbuttons sichtbar
c_gui.prototype.p_visibleMoveButtons = function ()
{
  document.getElementById ("ButtonN").style.visibility = "visible";
  document.getElementById ("ButtonS").style.visibility = "visible";
  document.getElementById ("ButtonW").style.visibility = "visible";
  document.getElementById ("ButtonO").style.visibility = "visible";
}

//Schaltet ItemButtons unsichtbar
c_gui.prototype.p_hideItemButtons = function ()
{
  document.getElementById ("ButtonHeiltrank").style.visibility = "hidden";
  document.getElementById ("ButtonManatrank").style.visibility = "hidden";
  document.getElementById ("ButtonMedizintrank").style.visibility = "hidden";
  document.getElementById ("ButtonPortalrolle").style.visibility = "hidden";
}

//Schaltet ItemButtons sichtbar
c_gui.prototype.p_visibleItemButtons = function ()
{
  document.getElementById ("ButtonHeiltrank").style.visibility = "visible";
  document.getElementById ("ButtonManatrank").style.visibility = "visible";
  document.getElementById ("ButtonMedizintrank").style.visibility = "visible";
  document.getElementById ("ButtonPortalrolle").style.visibility = "visible";
}

c_gui.prototype.p_hideZaubernButtons = function ()
{
  document.getElementById ("ButtonZaubern").style.visibility = "hidden";
  document.getElementById ("Zauberliste").style.visibility = "hidden";
}

c_gui.prototype.p_visibleZaubernButtons = function ()
{
  document.getElementById ("ButtonZaubern").style.visibility = "visible";
  document.getElementById ("Zauberliste").style.visibility = "visible";
}

c_gui.prototype.p_hideKontrollButtons = function ()
{
  document.getElementById ("ButtonSpeichern").style.visibility = "hidden";
  document.getElementById ("ButtonVerlassen").style.visibility = "hidden";
  document.getElementById ("ButtonMusik").style.visibility = "hidden";
  document.getElementById ("ButtonSound").style.visibility = "hidden";
}

c_gui.prototype.p_visibleKontrollButtons = function ()
{
  document.getElementById ("ButtonSpeichern").style.visibility = "visible";
  document.getElementById ("ButtonVerlassen").style.visibility = "visible";
  document.getElementById ("ButtonMusik").style.visibility = "visible";
  document.getElementById ("ButtonSound").style.visibility = "visible";
}

c_gui.prototype.p_hideAllButtons = function ()
{
  this.p_hideMoveButtons ();
  this.p_hideItemButtons ();
  this.p_hideZaubernButtons ();
  this.p_hideKontrollButtons ();

  document.getElementById ("ButtonI").style.visibility = "hidden";
  document.getElementById ("ButtonVollbild").style.visibility = "hidden";
}

c_gui.prototype.p_visibleAllButtons = function ()
{
  this.p_visibleMoveButtons () ;
  this.p_visibleItemButtons () ;
  this.p_visibleZaubernButtons ();
  this.p_visibleKontrollButtons ();

  document.getElementById ("ButtonI").style.visibility = "visible";
  document.getElementById ("ButtonVollbild").style.visibility = "visible";
}
