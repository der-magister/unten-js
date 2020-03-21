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

function c_sound () 
{
  this.v_on = true;
}

c_sound.prototype.p_init = function () {}

c_sound.prototype.p_load = function ()
{
  console.log ("--- Lade Sounddateien ---")

  v_soundArray [0].oncanplaythrough = function ()
  {
    v_soundArray [0].oncanplaythrough = null;

    v_soundArray [1].oncanplaythrough = function ()
    {
      v_soundArray [1].oncanplaythrough = null;

      v_soundArray [2].oncanplaythrough = function ()
      {
        v_soundArray [2].oncanplaythrough = null;
        
        v_soundArray [3].oncanplaythrough = function ()
        {
          v_soundArray [3].oncanplaythrough = null;

          v_soundArray [4].oncanplaythrough = function ()
          {
            v_soundArray [4].oncanplaythrough = null;
            console.log ("--- Fertig ---");
            o_musik.p_load (v_stand);
          }
          v_soundArray [4].src = "daten/sfx/rpg_sound_pack/inventory/bottle.wav";
          v_soundArray [4].load ();
        }
        v_soundArray [3].src = "daten/sfx/rpg_sound_pack/inventory/coin.wav";
        v_soundArray [3].load ();
      }
      v_soundArray [2].src = "daten/sfx/rpg_sound_pack/battle/swing3.wav";
      v_soundArray [2].load ();

    }
    v_soundArray [1].src = "daten/sfx/rpg_sound_pack/interface/interface1.wav";
    v_soundArray [1].load ();
  }
  v_soundArray [0].src = "daten/sfx/RPGsounds_Kenney/OGG/footstep06.ogg";
  v_soundArray [0].load ();
}

c_sound.prototype.p_play = function (v_nummer) 
{
  if (this.v_on == true)
  {
    v_soundArray [v_nummer].play ();
  }
} 

c_sound.prototype.p_stop = function (v_nummer) 
{
  v_soundArray [v_nummer].pause ();
  v_soundArray [v_nummer].currentTime = 0; 
}

c_sound.prototype.p_kontroll = function ()
{
    if (this.v_on == true)
    {
      this.v_on = false;
    }
    else if (this.v_on == false)
    {
      this.v_on = true;
    }
}
