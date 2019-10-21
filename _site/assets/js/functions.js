$(function() {
    $('.box').matchHeight();
});

$(function(){
    $(".includedContent").load("/content/navbar.html"); 
});

$(function(){
    $(".test").load("/content/test.html"); 
});

$(function(){
    $(".turing-reading").load("/content/turing-reading-content.html");
});

$(function(){
    $(".footer").load("/content/footer.html");
});

$(function(){
    $(".kangrui-content").load("/content/kangrui_content.html");
});

function get_month(month) {
    months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months[month-1];
}

function modules(data, parent_id) {
    var parent = document.getElementById(parent_id);

    for (var i = 0; i < data.length; i ++) {
        mod = data[i];

        div = document.createElement("div");
        div.className = "margin";
        div.style = "text-align: left;";
        parent.appendChild(div);

        a = document.createElement("a");
        a.href = mod.link;
        div.appendChild(a);

        h4 = document.createElement("h5");
        h4.innerHTML = mod.code + ": " + mod.name;
        a.appendChild(h4);

        append_list_of_people(div, mod.people);
    }
}

function append_list_of_people(parent, people) {
    p = document.createElement("p");
    if (people.length > 0) {
        person = string_person(people[0]);
        p.innerHTML = person;
    }
    else {
        p.innerHTML = "";
    }
    for (var j = 1; j < people.length; j++) {
        person = string_person(people[j]);
        p.innerHTML += ", " + person;
    }
    parent.appendChild(p);
}

function reading_groups(data, parent_id) {
    var parent = document.getElementById(parent_id);

    for (var i = 0; i < data.length; i ++) {
        group = data[i];

        div = document.createElement("div");
        div.className = "margin";
        div.style = "text-align: left;";
        parent.appendChild(div);

        a = document.createElement("a");
        a.href = group.link;
        div.appendChild(a);

        h4 = document.createElement("h5");
        h4.innerHTML = group.name;
        a.appendChild(h4);

        append_list_of_people(div, group.people);
    }
}

function sort_publications(data) {
    data.sort(function (a, b) {
        ayear = a.issued['date-parts'][0][0];
        byear = b.issued['date-parts'][0][0];
        if (ayear - byear > 0) {
            return -1;
        }
        else if (ayear - byear < 0) {
            return 1;
        }
        else if (ayear == byear && a.author[0].family != b.author[0].family) {
            if (a.author[0].family < b.author[0].family) {
                return -1;
            }
            else if (a.author[0].family > b.author[0].family) {
                return 1;
            }
        }
        else {
            return 0;
        }
    });
    return data;
}

function sort_names(data) {
    data.sort(function (a, b) {
        if (a.lastname < b.lastname) {
            return -1;
        }
        else if (a.lastname > b.lastname) {
            return 1;
        }
        else {
            if (a.firstname < b.firstname) {
                return -1;
            }
            else if (a.firstname > b.firstname) {
                return 1;
            }
            else {
                return 0;
            }
        }
    });
    return data;
}

function sort_by_attributes(data, attrs) {
    data.sort(function(a, b) {
        value = 0;
        i = 0;
        while (value == 0 && i < attrs.length) {
            value = sort_by_attr(a, b, attrs[i]);
            i += 1;
        }
        return value;
    });
    return data;
}

function sort_by_attr(a, b, attr) {
    if (a[attr] < b[attr]) {
        return -1;
    }
    else if (a[attr] > b[attr]) {
        return 1;
    }
    else {
        return 0;
    }
}

function logos(data, parent_id) {
    var parent = document.getElementById(parent_id);
    var row = document.createElement("div");
    row.className = "row";
    parent.appendChild(row);

    for (var i = 0; i < data.length; i ++) {
        var div = document.createElement("div");
        div.className = "col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2";
        row.appendChild(div);

        var a = document.createElement("a");
        a.href = data[i].link;
        div.appendChild(a);

        appendImage(a, data[i].src, data[i].name);
    }
}

function get_people(role, parent_id, people) {
    var row = document.createElement("div");
    row.className = "row";
    var parent = document.getElementById(parent_id);
    parent.appendChild(row);

    len = people.length;
    for (var i = 0; i < len; i++) {
        if (people[i].role==role) {
            show_person(row, people[i]);
        }
    }
}

function the_news(news, parent_id) {
    var parent = document.getElementById(parent_id);

    len = news.length;
    for (var i = 0; i < len; i++) {
        if (news[i].year > 2018 | news[i].month > 9) {
            news_item(parent, news[i].headline, news[i].month, news[i].year, "", "", news[i].link, "");
        }
    }
}

function the_full_story(news, parent_id) {
    var parent = document.getElementById(parent_id);

    len = news.length;
    for (var i = 0; i < len; i++) {
        if (news[i].topstory == false) {
            news_item(parent, news[i].headline, news[i].month, news[i].year, news[i].img, news[i].text, news[i].link, news[i].alt);
        }
    }
}

function headlines(news, parent_id) {
    var parent = document.getElementById(parent_id);

    len = news.length;
    count = 0;
    for (var i = 0; i < len; i++) {
        if (news[i].topstory == true) {
            // create carousel item
            var item = document.createElement("div");
            parent.appendChild(item);
            classes = "carousel-item";
            if (count == 0) {   // first item is active
                classes = classes + " active";
            }
            item.className = classes;
            
            // create row
            var row = document.createElement("div");
            item.appendChild(row);
            row.className = "row";

            // create first spacer
            var space1 = document.createElement("div");
            row.appendChild(space1);
            space1.className = "col-lg-2 col-md-0 col-sm-1";

            // column containing card
            var col = document.createElement("div");
            row.appendChild(col);
            col.className = "col-lg-8 col-md-12 col-sm-10";

            // card
            var card = document.createElement("div");
            col.appendChild(card);
            card.className = "card headline";
            card.style = "border:none";

            // split row to space card
            var split = document.createElement("div");
            card.appendChild(split);
            split.className = "row";

            // add headline to row
            create_headline(split, news[i].headline, news[i].month, news[i].year, news[i].img, news[i].text, news[i].link, news[i].alt);

            // second spacer
            var space2 = document.createElement("div");
            row.appendChild(space2);
            space2.className = "col-lg-2 col-md-0 col-sm-1";

            // increment count
            count = count + 1;
        }
    }
}

function string_person(person) {
    return person.prefix + " " + person.firstname + " " + person.lastname;
}

function create_headline(parent, headline, month, year, src, text, link, alt) {
    // add left side of headline
    var left = document.createElement("div");
    parent.appendChild(left);
    left.className = "col-lg-8 col-md-6 col-sm-12";

    // body of card
    var body = document.createElement("div");
    left.appendChild(body);
    body.className = "card-body";

    // title of card
    var title = document.createElement("h1");
    body.appendChild(title);
    title.className = "card-title";
    title.innerHTML = headline;

    appendText(body, text, true);
    appendDate(body, month, year, true);
    appendLink(body, link);

    // add right side of card
    var right = document.createElement("div");
    parent.appendChild(right);
    right.className = "col-lg-4 col-md-6 col-sm-12";

    // add image to right side
    appendImage(right, src, alt);
}

function show_person(parent, person) {
    var div = document.createElement("div");
    div.className = "col-6 col-sm-4 col-md-3 col-lg-2";
    parent.appendChild(div)

    var a = document.createElement("a");
    a.href = person.link;
    div.appendChild(a);

    var img = document.createElement("img");
    img.className = "img-responsive rounded-circle";
    img.src = person.src;
    img.style = "width:100%; padding-bottom:5px; padding-top:5px";
    img.alt = string_person(person);
    a.appendChild(img);

    var h5 = document.createElement("h5");
    h5.innerHTML = string_person(person);
    a.appendChild(h5);
}

function news_item(parent, headline, month, year, src, text, link, alt) {
    // create card
    var card = document.createElement("div");
    parent.appendChild(card);
    card.className = "card";
    
    // add image if possible
    appendImage(card, src, alt);

    // create card body
    var body = document.createElement("div");
    card.appendChild(body);
    body.className = "card-body";

    // add title
    var title = document.createElement("h5");
    body.appendChild(title);
    title.className = "card-title text-dark";
    title.innerHTML = headline;

    // add text if possible
    appendText(body, text, false);

    // add date
    appendDate(body, month, year, false);

    // add link if possible
    appendLink(body, link);
}

function appendDate(parent, month, year, important) {
    var date = document.createElement("p");
    parent.appendChild(date);
    date.className = "card-text";
    var small = document.createElement("small");
    date.appendChild(small);
    if (important) {
        small.className = "text-light";
    }
    else {
        small.className = "text-muted";
    }
    small.innerHTML = get_month(month) + " " + year;
}

function appendLink(parent, link) {
    if (link != "") {
        var div = document.createElement("div");
        parent.appendChild(div);
        div.className = "read-more";

        var a = document.createElement("a");
        div.appendChild(a);
        a.className = "btn btn-primary";
        a.href = link;
        a.innerHTML = "Read more";
    }
}

function appendText(parent, text, important) {
    // add text if possible
    if (text != "") {
        var cardtext = document.createElement("p");
        parent.appendChild(cardtext);
        if (important) {
            cardtext.className = "card-text text-light";
        }
        else {
            cardtext.className = "card-text text-dark";
        }
        cardtext.innerHTML = text;
    }
}

function appendImage(parent, src, alt) {
    if (src != "") {
        var img = document.createElement("img");
        parent.appendChild(img);
        img.className = "card-img-top";
        img.src = src;

        if (alt != null || alt != "") {
            img.alt = alt;
        }
    }
}

function publications(data, parent_id) {
    var parent = document.getElementById(parent_id);

    len = data.length;
    for (var i = 0; i < len; i++) {
        var p = document.createElement("p");
        parent.appendChild(p);
        citation = create_citation_string(data[i]);
        p.innerHTML = citation;
    }

    i = document.createElement("i");
    i.innerHTML = "The above publications have been selected because they are machine learning focused. For a full list of up to date publications please visit the webpages of individual members."
    i.style = "margin-top: 30px;";
    parent.appendChild(i);
}

function create_citation_string(cite) {
    authors = cite.author;
    year = cite.issued['date-parts'][0][0];
    title = cite.title;
    journal = cite['container-title'];
    page = cite.page;
    volume = cite.volume;
    issue = cite.issue;
    url = cite.url;
    
    citation = ""

    // add authors in format: Blogs. J., Blogs. K. and Blogs. L.
    num_authors = authors.length;
    for (var i = 0; i < num_authors; i++) {
        citation += authors[i].family + ". " + authors[i].given[0] + ".";
        if (i == num_authors - 2 & num_authors > 1) {
            citation += " and ";
        }
        else if (i < num_authors - 2 & num_authors > 2) {
            citation += ", ";
        }
        else {
            citation += " ";
        }
    }

    // add year in brackets
    citation += "("+String(year)+"). ";

    // add title with link to paper
    if (url != null) {
        citation += "<a href='" + url + "'>" + title + "</a>";
    }
    else {
        citation += title;
    }
    citation += ". ";
    
    // add journal in italics
    citation += "<i>" + journal + "</i>";

    if (journal == "arXiv e-prints") {
        citation += ", " + page;
    }
    if (volume != null) {
        citation += ", " + String(volume);
    }
    if (issue != null) {
        citation += "(" + String(issue) + ")";
    }
    if (page != null & journal != "arXiv e-prints") {
        citation += ", pp. " + page;
    }
    citation += ".";
    return citation;
}
