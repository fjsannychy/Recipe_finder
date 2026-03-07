async function getData() {
    let input = document.getElementById("searchText");
    let recipeName = input.value.trim();

    // Use 'a' as default search to show popular recipes on startup
    let query = recipeName === "" ? "a" : recipeName;

    try {
        let resp = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );
        if (resp.ok) {
            return await resp.json();
        }
    } catch (error) {
        console.error("API Error:", error);
    }
    return null;
}