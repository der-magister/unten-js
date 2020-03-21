//  Unten - ein Rollenspiel im Retrodesign
//
//   Copyright (C) 2018 Heiko Wolf
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

function c_gfx () 
{
    this.v_angriffsIcon = new Image ();
    this.v_vollbild = false;
}

c_gfx.prototype.p_init = function ()
{
  this.v_angriffsIcon.src = "daten/gfk/gui/angriff.png";
}

c_gfx.prototype.p_vollbild = function ()
{
  /*if (this.v_vollbild == false)
  {
    win.enterFullscreen ();    
    this.v_vollbild = true;
  }
  else if (this.v_vollbild == true)
  {
    win.leaveFullscreen ()
    this.v_vollbild = false;
  }*/
  //win.toggleFullscreen ();
}
