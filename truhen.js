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

function c_truhen ()
{
  this.v_status = [];     // 0 - Truhe verschlossen, 1 - Truhe geöffnet
}

c_truhen.prototype.p_init = function ()
{
  for (let v_i = 0; v_i < 256; v_i++) { this.v_status [v_i] = 0; }
}

c_truhen.prototype.p_open = function (xk, yk)
{
  v_statuscanvas_context.fillStyle = "#000000";
  v_statuscanvas_context.fillRect (xk * 20, yk * 20, 20, 8);
}

c_truhen.prototype.p_goldtruhe = function (v_xk, v_yk, v_nr, v_hoehe)
{
  if ((o_charakter.v_mxk == v_xk) && (o_charakter.v_myk == v_yk))
  {
    o_fenster.p_drawWindow ();

    if (o_truhen.v_status [v_nr] == 0)
    {
      o_fenster.p_writeText (v_truhentexte  [1] + v_hoehe + v_truhentexte [12], "", "", "", "");
      o_charakter.v_gold += v_hoehe;
      o_ausgabe.p_writeGold ();
      o_truhen.v_status [v_nr] = 1;
      o_truhen.p_status ();
    }
    else
    {
      o_fenster.p_writeText (v_truhentexte  [0], "", "", "", "");
    }
  }
}

c_truhen.prototype.p_heiltranktruhe = function (v_xk, v_yk, v_nr, v_anzahl)
{
  if ((o_charakter.v_mxk == v_xk) && (o_charakter.v_myk == v_yk))
  {
    o_fenster.p_drawWindow ();

    if (o_truhen.v_status [v_nr] == 0)
    {
      o_fenster.p_writeText (v_truhentexte  [2] + v_anzahl + v_truhentexte [13], "", "", "", "");
      o_charakter.v_heiltrank += v_anzahl;
      o_ausgabe.p_writeHeiltrank ();
      o_truhen.v_status [v_nr] = 1;
      o_truhen.p_status ();
    }
    else
    {
      o_fenster.p_writeText (v_truhentexte  [0], "", "", "", "");
    }
  }
}

c_truhen.prototype.p_manatranktruhe = function (v_xk, v_yk, v_nr, v_anzahl)
{
  if ((o_charakter.v_mxk == v_xk) && (o_charakter.v_myk == v_yk))
  {
    o_fenster.p_drawWindow ();

    if (o_truhen.v_status [v_nr] == 0)
    {
      o_fenster.p_writeText (v_truhentexte [3] + v_anzahl + v_truhentexte [14], "", "", "", "");
      o_charakter.v_manatrank += v_anzahl;
      o_ausgabe.p_writeManatrank ();
      o_truhen.v_status [v_nr] = 1;
      o_truhen.p_status ();
    }
    else
    {
      o_fenster.p_writeText (v_truhentexte  [0], "", "", "", "");
    }
  }
}

c_truhen.prototype.p_portalrolletruhe = function (v_xk, v_yk, v_nr, v_anzahl)
{
  if  ((o_charakter.v_mxk == v_xk) && (o_charakter.v_myk == v_yk))
  {
    o_fenster.p_drawWindow ();

    if (o_truhen.v_status [v_nr] == 0)
    {
      if (v_anzahl == 1)
      {
        o_fenster.p_writeText (v_truhentexte [1] + v_anzahl + v_truhentexte [15], "", "", "", "");
      }
      else if (v_anzahl > 1)
      {
        o_fenster.p_writeText (v_anzahl + " Portalrollen erhalten!", "", "", "", "");
      }
      o_charakter.v_portalrolle += v_anzahl; 
      o_truhen.v_status [v_nr] = 1;
      o_ausgabe.p_writePortalrolle ();
      o_truhen.p_status ();
    }
  }
}

c_truhen.prototype.p_provianttruhe = function (v_xk, v_yk, v_nr, v_anzahl)
{
  if  ((o_charakter.v_mxk == v_xk) && (o_charakter.v_myk == v_yk))
  {
    o_fenster.p_drawWindow ();

    if (o_truhen.v_status [v_nr] == 0)
    {
      o_fenster.p_writeText (v_anzahl + " Proviant erhalten", "", "", "", "", "");
      o_charakter.v_proviant += v_anzahl; 
      o_truhen.v_status [v_nr] = 1;
      o_ausgabe.p_writeProviant ();
      o_truhen.p_status ();
    }
  }
} 

//Rüstungstruhe (XK, YK, Truhennummer, Anzahl benötigter Schlachtfelder, Rüstungsname Krieger, Rüstungsname Dieb, Rüstungsname Zauberer, Rüstungswert)
c_truhen.prototype.p_ruestungstruhe = function (v_xk, v_yk, v_nr, v_aschlachtfelder, v_rstxt1, v_rstxt2, v_rstxt3, v_rswert)
{
  if ((o_charakter.v_mxk == v_xk) && (o_charakter.v_myk == v_yk))
  {
    o_fenster.p_drawWindow ();

    if (o_truhen.v_status [v_nr] == 0)
    {
      
      if (o_charakter.v_schlachtfelder >= v_aschlachtfelder)
      { 
        if (o_charakter.v_klasse == "Krieger")
        {
          o_charakter.v_ruestung = v_rstxt1;
        }
        else if (o_charakter.v_klasse == "Dieb")
        {
          o_charakter.v_ruestung = v_rstxt2;
        }
        else if (o_charakter.v_klasse == "Zauberer")
        {
          o_charakter.v_ruestung = v_rstxt3;
        }

        o_charakter.v_ruestungswert = v_rswert;
        o_ausgabe.p_writeRuestung ();  
        o_fenster.p_writeText (v_truhentexte [1] + o_charakter.v_ruestung, "", "", "", "");
        o_truhen.v_status [v_nr] = 1;
        o_truhen.p_status ();
      }
      else
      {
        o_fenster.p_writeText ("Die Truhe ist verschlossen! Eine blauglühende " + v_aschlachtfelder + " ist zu sehen.", "", "", "", "");
      }
    }
    else if (o_truhen.v_status [v_nr] == 1)
    {
      o_fenster.p_writeText (v_truhentexte [0], "", "", "", "");
    }
  }
}

c_truhen.prototype.p_status = function ()
{
  document.getElementById ("statuscanvas").style.visibility = "visible";

  if (v_lvl == 2)
  {
    if (this.v_status [1] == 1) { this.p_open (14, 9); }
    if (this.v_status [2] == 1) { this.p_open (14, 1); }
  }
  else if (v_lvl == 3)
  {
    if (this.v_status [3] == 1) { this.p_open (15, 12); }
    if (this.v_status [4] == 1) { this.p_open (9, 12); }
  }
  else if (v_lvl == 4)
  {
    if (this.v_status [5] == 1) { this.p_open (15, 4); }
    if (this.v_status [6] == 1) { this.p_open (5, 14); }
  }
  else if (v_lvl == 5)
  {
    if (this.v_status [7] == 1) { this.p_open (14, 12); }
    if (this.v_status [8] == 1) { this.p_open (19, 7); }
  }
  else if (v_lvl == 7)
  {
    if (this.v_status [9] == 1) { this.p_open (12, 5); }
  }
  else if (v_lvl == 9)
  {
    if (this.v_status [10] == 1) { this.p_open (12, 9); }
  }
  else if (v_lvl == 12)
  {
    if (this.v_status [11] == 1) { this.p_open (10, 10); }
  }
  else if (v_lvl == 13) 
  {
    if (this.v_status [12] == 1) { this.p_open (11, 7); }
    if (this.v_status [13] == 1) { this.p_open (17, 10); }
  }
  else if (v_lvl == 14)
  {
    if (this.v_status [14] == 1) { this.p_open (10, 3); }
  }
  else if (v_lvl == 17)
  {
    if (this.v_status [15] == 1) { this.p_open (18, 10); }
  }
  else if (v_lvl == 19)
  {
    if (this.v_status [16] == 1) { this.p_open (18, 10); }
  }
  else if (v_lvl == 21)
  {
    if (this.v_status [17] == 1) { this.p_open (2, 17); }
    if (this.v_status [18] == 1) { this.p_open (16, 2); }
  }
  else if (v_lvl == 23)
  {
    if (this.v_status [19] == 1) { this.p_open (7, 2); }
  }
  else if (v_lvl == 24)
  {
    if (this.v_status [20] == 1) { this.p_open (5, 8); }
  }
  else if (v_lvl == 28)
  {
    if (this.v_status [21] == 1) { this.p_open (1, 10); }
  }
  else if (v_lvl == 34)
  {
    if (this.v_status [23] == 1) { this.p_open (10, 14); }
  }
  else if (v_lvl == 38)
  {
    if (this.v_status [24] == 1) { this.p_open (18, 10); }
  }
  else if (v_lvl == 39)
  {
    if (this.v_status [25] == 1) { this.p_open (10, 18); }
  }
  else if (v_lvl == 43)
  {
    if (this.v_status [26] == 1) { this.p_open (3, 1); }
  }
}
