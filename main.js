function addUser()
{
    player1_name = document.getElementById("player_1_N_IP").value;
    player2_name = document.getElementById("player_2_N_IP").value;


    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location ="game_page.html";
}