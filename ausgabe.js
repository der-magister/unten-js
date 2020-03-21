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

function c_ausgabe () {}

c_ausgabe.prototype.p_init = function ()
{
  v_ausgabecanvas_context.fillStyle ="white";
  v_ausgabecanvas_context.textBaseline = "top";
  v_ausgabecanvas_context.font = "12px Arial";

  v_ausgabe2canvas_context.fillStyle = "white";
  v_ausgabe2canvas_context.font = "10px Arial";
  v_ausgabe2canvas_context.textBaseline = "top";
  
}

c_ausgabe.prototype.p_writeAll = function ()
{
  v_ausgabecanvas_context.fillText ("Stats", 110, 0);
  v_ausgabecanvas_context.fillText ("Stats", 110, 0);
  
  this.p_writeName ();
  this.p_writeLebenspunkte ();
  this.p_writeManapunkte ();
  this.p_writeStatus ();
  this.p_writeZustand ();
  this.p_writeErfahrungspunkte ();
  this.p_writeStufe ();
  
  v_ausgabecanvas_context.fillText ("Inventar", 102, 118);
  v_ausgabecanvas_context.fillText ("Inventar", 102, 118);
  
  this.p_writeWaffe ();
  this.p_writeRuestung ();
  this.p_writeSchild ();
  this.p_writeGold ();
  this.p_writeHeiltrank ();
  this.p_writeManatrank ();
  this.p_writeMedizintrank ();
  this.p_writePortalrolle ();
  this.p_writeProviant ();
  
  v_ausgabecanvas_context.fillText ("Handwerk", 95, 269);
  v_ausgabecanvas_context.fillText ("Handwerk", 95, 269);
  
  this.p_writeWaffenorb ();
  this.p_writeRuestungsorb ();
  this.p_writeSchildorb ();
  
  v_ausgabecanvas_context.fillText ("Journal", 102,  329);
  v_ausgabecanvas_context.fillText ("Journal", 102,  329);
  
  this.p_writeSchlachtfelder ();
  this.p_writeQueststand ();
  
  v_ausgabecanvas_context.fillText ("System", 102,  505);
  v_ausgabecanvas_context.fillText ("System", 102,  505);
}

c_ausgabe.prototype.p_writeName = function ()
{
  v_ausgabecanvas_context.clearRect (5, 15, 220, 12);
  v_ausgabecanvas_context.fillText ("Name", 5, 15);
  v_ausgabecanvas_context.fillText (":", 107, 15);
  v_ausgabecanvas_context.fillText (o_charakter.v_name, 113, 15);
}

c_ausgabe.prototype.p_writeLebenspunkte = function ()
{
  v_ausgabecanvas_context.clearRect (5, 30, 220, 12);
  v_ausgabecanvas_context.fillText ("Lebenspunkte", 5, 30);
  v_ausgabecanvas_context.fillText (":", 107, 30);
  v_ausgabecanvas_context.fillText (o_charakter.v_lebenspunkte  + "/" + o_charakter.v_mlebenspunkte, 113, 30);
}

c_ausgabe.prototype.p_writeManapunkte = function ()
{
  v_ausgabecanvas_context.clearRect (5, 45, 220, 12);
  v_ausgabecanvas_context.fillText ("Manapunkte", 5, 45);
  v_ausgabecanvas_context.fillText (":", 107, 45);
  v_ausgabecanvas_context.fillText (o_charakter.v_manapunkte + "/" + o_charakter.v_mmanapunkte, 113, 45);
}

c_ausgabe.prototype.p_writeStatus = function ()
{
  v_ausgabecanvas_context.clearRect (5, 60, 220, 12);
  v_ausgabecanvas_context.fillText ("Status", 5, 60);
  v_ausgabecanvas_context.fillText (":", 107, 60);
  v_ausgabecanvas_context.fillText (o_charakter.v_status, 113, 60);
}

c_ausgabe.prototype.p_writeZustand = function ()
{
  v_ausgabecanvas_context.clearRect (5, 75, 220, 12);
  v_ausgabecanvas_context.fillText ("Zustand", 5, 75);
  v_ausgabecanvas_context.fillText (":", 107, 75); 
  v_ausgabecanvas_context.fillText (o_charakter.v_zustand, 113, 75)
}

c_ausgabe.prototype.p_writeErfahrungspunkte = function ()
{
  v_ausgabecanvas_context.clearRect (5, 90, 220, 13);
  v_ausgabecanvas_context.fillText ("Erfahrungspunkte", 5, 90);
  v_ausgabecanvas_context.fillText (":", 107, 90);
  v_ausgabecanvas_context.fillText (o_charakter.v_erfahrungspunkte, 113, 90);
}

c_ausgabe.prototype.p_writeStufe = function ()
{
  v_ausgabecanvas_context.clearRect (5, 105, 220, 13);
  v_ausgabecanvas_context.fillText ("Stufe", 5, 105);
  v_ausgabecanvas_context.fillText (":", 107, 105);
  v_ausgabecanvas_context.fillText (o_charakter.v_stufe, 113, 105);
}

c_ausgabe.prototype.p_writeWaffe = function ()
{
  v_ausgabecanvas_context.clearRect (5, 135, 240, 13);
  v_ausgabecanvas_context.fillText ("Waffe", 5, 135);
  v_ausgabecanvas_context.fillText (":", 107, 135);
  v_ausgabecanvas_context.fillText (o_charakter.v_waffe, 113, 135);
}

c_ausgabe.prototype.p_writeRuestung = function ()
{
  v_ausgabecanvas_context.clearRect (5, 150, 240, 14);
  v_ausgabecanvas_context.fillText ("Rüstung", 5, 150);
  v_ausgabecanvas_context.fillText (":", 107, 150);
  v_ausgabecanvas_context.fillText (o_charakter.v_ruestung, 113, 150);
}

c_ausgabe.prototype.p_writeSchild = function ()
{
  v_ausgabecanvas_context.clearRect (5, 165, 240, 13);
  v_ausgabecanvas_context.fillText ("Schild", 5, 165);
  v_ausgabecanvas_context.fillText (":", 107, 165); 
  v_ausgabecanvas_context.fillText (o_charakter.v_schild, 113, 165);
}

c_ausgabe.prototype.p_writeGold = function ()
{
  v_ausgabecanvas_context.clearRect (5, 180, 220, 13);
  v_ausgabecanvas_context.fillText ("Goldmünzen", 5, 180);
  v_ausgabecanvas_context.fillText (":", 107, 180);
  v_ausgabecanvas_context.fillText (o_charakter.v_gold, 113, 180);
}

c_ausgabe.prototype.p_writeHeiltrank = function ()
{
  v_ausgabecanvas_context.clearRect (5, 195, 220, 13);
  v_ausgabecanvas_context.fillText ("Heiltränke", 5, 195);
  v_ausgabecanvas_context.fillText (":", 107, 195);
  v_ausgabecanvas_context.fillText (o_charakter.v_heiltrank, 113, 195);
}

c_ausgabe.prototype.p_writeManatrank = function ()
{
  v_ausgabecanvas_context.clearRect (5, 210, 220, 13);
  v_ausgabecanvas_context.fillText ("Manatränke", 5, 210); 
  v_ausgabecanvas_context.fillText (":", 107, 210);
  v_ausgabecanvas_context.fillText (o_charakter.v_manatrank, 113, 210);
}

c_ausgabe.prototype.p_writeMedizintrank = function ()
{
  v_ausgabecanvas_context.clearRect (5, 225, 220, 13);
  v_ausgabecanvas_context.fillText ("Medizintränke", 5, 225); 
  v_ausgabecanvas_context.fillText (":", 107, 225);
  v_ausgabecanvas_context.fillText (o_charakter.v_medizintrank, 113, 225);
}

c_ausgabe.prototype.p_writePortalrolle = function ()
{
  v_ausgabecanvas_context.clearRect (5, 240, 220, 13);
  v_ausgabecanvas_context.fillText ("Portalrolle", 5, 240);
  v_ausgabecanvas_context.fillText (":", 107, 240);
  v_ausgabecanvas_context.fillText (o_charakter.v_portalrolle, 113, 240);
}

c_ausgabe.prototype.p_writeProviant = function ()
{
  v_ausgabecanvas_context.clearRect (5, 255, 220, 13);
  v_ausgabecanvas_context.fillText ("Proviant", 5, 255);
  v_ausgabecanvas_context.fillText (":", 107, 255);
  v_ausgabecanvas_context.fillText (o_charakter.v_proviant, 113, 255);
}

c_ausgabe.prototype.p_writeWaffenorb = function ()
{
  v_ausgabecanvas_context.clearRect (5, 285, 220, 13);
  v_ausgabecanvas_context.fillText ("Waffenorbs", 5, 285);
  v_ausgabecanvas_context.fillText (":", 107, 285);
  v_ausgabecanvas_context.fillText (o_charakter.v_waffenorb, 113, 285);
}

c_ausgabe.prototype.p_writeRuestungsorb = function ()
{
  v_ausgabecanvas_context.clearRect (5, 300, 220, 13);
  v_ausgabecanvas_context.fillText ("Rüstungsorbs", 5, 300);
  v_ausgabecanvas_context.fillText (":", 107, 295);
  v_ausgabecanvas_context.fillText (o_charakter.v_ruestungsorb, 113, 300);
}

//Gibt Anzahl der Schildorbs aus
c_ausgabe.prototype.p_writeSchildorb = function ()
{
  v_ausgabecanvas_context.clearRect (5, 315, 220, 13);
  v_ausgabecanvas_context.fillText ("Schildorbs", 5, 315);
  v_ausgabecanvas_context.fillText (":", 107, 315);
  v_ausgabecanvas_context.fillText (o_charakter.v_schildorb, 113, 315);
}

c_ausgabe.prototype.p_writeSchlachtfelder = function ()
{
  v_ausgabecanvas_context.clearRect (5, 344, 220, 14);
  v_ausgabecanvas_context.fillText ("Schlachtfelder", 5, 344);
  v_ausgabecanvas_context.fillText (":", 107, 344);
  v_ausgabecanvas_context.fillText (o_charakter.v_schlachtfelder, 113, 344);
}

c_ausgabe.prototype.p_writeQueststand = function ()
{
  v_ausgabecanvas_context.clearRect (5, 359, 240, 14);
  v_ausgabecanvas_context.fillText ("Aufgabe", 5, 359);
  v_ausgabecanvas_context.fillText (":", 107, 359);
  v_ausgabecanvas_context.fillText (o_charakter.v_queststand, 113, 359);
}

c_ausgabe.prototype.p_writeKoords = function ()
{
  v_ausgabe2canvas_context.clearRect (0, 0, 150, 15);
  v_ausgabe2canvas_context.fillText ("Koordinaten: " + o_charakter.v_mxk + "/" + o_charakter.v_myk, 0, 0);
}

c_ausgabe.prototype.p_writeLevel = function ()
{
  v_ausgabe2canvas_context.clearRect (180, 0, 150, 14);
  v_ausgabe2canvas_context.fillText ("Level: " + v_lvl, 180, 0);
}

c_ausgabe.prototype.p_writeSchlachtfeldNummer = function ()
{
  v_ausgabe2canvas_context.clearRect (320, 0, 150, 14);
  v_ausgabe2canvas_context.fillText ("Ebene: " + o_schlachtfelder.v_etage [v_schlachtfeld],  320, 0);
}
