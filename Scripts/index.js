async function getData() {

    let recipeName = document.getElementById("searchText").value;

    let resp = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`
    );

    if (resp.ok) {
        return resp.json();
    } else {
        return null;
    }
}

