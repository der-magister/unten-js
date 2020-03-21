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

function c_musik () 
{
  this.v_on = true;
  this.v_nr = 1;

}

//Lädt Musikdateien
c_musik.prototype.p_load = function ()
{
  console.log ("--- Lade Musikdateien ---")
  v_musikArray[0].oncanplaythrough = function ()
  {
    v_musikArray [0].oncanplaythrough = null;
    console.log ("daten/musik/remaxim/old_city_theme.ogg geladen");

    v_musikArray [1].oncanplaythrough = function ()
    {
      v_musikArray [1].oncanplaythrough = null;
      console.log ("daten/musik/remaxim/overworld_theme.ogg geladen");
      
      v_musikArray [2].oncanplaythrough = function ()
      {
        v_musikArray [2].oncanplaythrough = null;
        console.log ("daten/musik/remaxim/battle_theme.ogg geladen");

        v_musikArray [3].oncanplaythrough = function ()
        {
          v_musikArray [3].oncanplaythrough = null;
          console.log ("daten/musik/remaxim/boss_theme.ogg geladen");

          v_musikArray [4].oncanplaythrough = function ()
          {
            v_musikArray [4].oncanplaythrough = null;
            console.log ("daten/musik/remaxim/win_music_3.ogg geladen");

            v_musikArray [5].oncanplaythrough = function ()
            {
              v_musikArray [5].oncanplaythrough = null;
              console.log ("daten/musik/remaxim/lose_music_1.ogg geladen");

              v_musikArray [6].oncanplaythrough = function ()
              {
                v_musikArray [6].oncanplaythrough = null;
                console.log ("daten/musik/remaxim/magical_theme.ogg geladen");
                console.log ("--- Fertig ---");
                if (v_stand == "neu")
                {
                  f_init_go ();
                } 
                else if (v_stand == "alt")
                {
                  f_init2_go ();
                }
              }
              v_musikArray[6].src = "daten/musik/remaxim/magical_theme.ogg";;
              v_musikArray[6].load ();
            }
            v_musikArray[5].src = "daten/musik/remaxim/lose_music_1.ogg";;
            v_musikArray[5].load ();
          }
          v_musikArray[4].src = "daten/musik/remaxim/win_music_3.ogg";;
          v_musikArray[4].load ();
        }
        v_musikArray[3].src = "daten/musik/remaxim/boss_theme.ogg";;
        v_musikArray[3].load ();
      }
      v_musikArray[2].src = "daten/musik/remaxim/battle_theme.ogg";;
      v_musikArray[2].load ();
    }

    v_musikArray[1].src = "daten/musik/remaxim/overworld_theme.ogg";;
    v_musikArray[1].load ();
  }
    
  v_musikArray[0].src = "daten/musik/remaxim/old_city_theme.ogg";
  v_musikArray[0].load ();
}

//Spielt angegebenes Musikstück
c_musik.prototype.p_play = function (v_nummer)
{
  this.v_nr = v_nummer;
  
  if (this.v_on == true)
  {
    v_musikArray [v_nummer].play ();
  }
} 

//Stopt angegebens Musikstück
c_musik.prototype.p_stop = function (v_nummer)
{
  v_musikArray [v_nummer].pause ();
  v_musikArray [v_nummer].currentTime = 0; 
}

c_musik.prototype.p_stopAll = function ()
{
  for (v_i = 0; v_i <=6; v_i++)
  {
    v_musikArray [v_i].pause ();
    v_musikArray [v_i].currentTime = 0; 
  }
}

//Musikkontrolle
c_musik.prototype.p_kontroll = function ()
{
  if (this.v_on == true)
  {
    this.v_on = false;
    this.p_stop (this.v_nr);
  }
  else if (this.v_on == false)
  {
    this.v_on = true;
    this.p_play (this.v_nr);
  }
}
