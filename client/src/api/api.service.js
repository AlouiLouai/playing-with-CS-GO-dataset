export async function getKillsPerPlayer() {
    try {
        const response = await fetch('/playerKills');
        return await response.text();
    } catch (error) {
        return [];
    }

}

export async function getScoreBoard() {
    try {
        const response = await fetch(`/scoreboard`);
        return await response.text();
    } catch (error) {
        return [];
    }
}


export async function getAverageRoundLength() {
    try {
        const response = await fetch('/averageRoundLength');
        return await response.text();
    } catch (error) {
        return [];
    }
}