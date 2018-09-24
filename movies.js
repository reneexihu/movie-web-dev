<% include partials/header.ejs %>

<h1>This is movies page</h1>

<% movies.forEach(function(movie){ %> 
    <div>
        <h4><%= movie.name %></h4>
        <img src="<%= movie.image %>" width="600" height="700">
    </div>
<% });%>
<!-- add input ???-->


<% include partials/footer.ejs %>


