//my link array with 3 link objects
const linkArray = [
  { "name": "LinkedIn", "url": "https://www.linkedin.com/in/timfsim/" },
  { "name": "Portfolio", "url": "https://www.facebook.com/timothy.simanhadi" },
  { "name": "GitHub", "url": "https://timmichi.github.io/" },
]

const socialArray = [
  {
    "svg": "<svg width=\"35\" height=\"35\" viewBox=\"0 0 22 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">" +
      "<rect x=\"0.23941\" y=\"4.12492\" width=\"18.0469\" height=\"17.875\" fill=\"white\"/>" +
      "<path d=\"M20.1309 0H2.42773C0.322266 0 0 0.34375 0 2.75V19.916C0 21.4326 0.352516 22 1.86914 22H11V14.4375H8.25V11H11V8.25C11 5.97163 12.8466 4.125 15.125 4.125H17.875V7.5625H16.5C15.741 7.5625 15.125 7.491 15.125 8.25V11H18.5625L17.1875 14.4375H15.125V22H20.1309C21.6475 22 22 21.4326 22 19.916V1.89062C22 0.374 21.6475 0 20.1309 0Z\" fill=\"black\"/>" +
      "</svg>",
    "url": "https://www.facebook.com/timothy.simanhadi"
  },
  {
    "svg": "<svg width=\"35\" height=\"35\" viewBox=\"0 0 22 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">" +
      "<rect x=\"0.956512\" y=\"0.956516\" width=\"20.087\" height=\"20.087\" rx=\"7\" fill=\"black\"/>" +
      "<path d=\"M15.125 0H6.875C3.07863 0 0 3.07863 0 6.875V15.125C0 18.9214 3.07863 22 6.875 22H15.125C18.9214 22 22 18.9214 22 15.125V6.875C22 3.07863 18.9214 0 15.125 0ZM19.9375 15.125C19.9375 17.7787 17.7787 19.9375 15.125 19.9375H6.875C4.22125 19.9375 2.0625 17.7787 2.0625 15.125V6.875C2.0625 4.22125 4.22125 2.0625 6.875 2.0625H15.125C17.7787 2.0625 19.9375 4.22125 19.9375 6.875V15.125Z\" fill=\"black\"/>" +
      "<path d=\"M11 5.5C7.96262 5.5 5.5 7.96262 5.5 11C5.5 14.0374 7.96262 16.5 11 16.5C14.0374 16.5 16.5 14.0374 16.5 11C16.5 7.96262 14.0374 5.5 11 5.5ZM11 14.4375C9.10525 14.4375 7.5625 12.8948 7.5625 11C7.5625 9.10388 9.10525 7.5625 11 7.5625C12.8948 7.5625 14.4375 9.10388 14.4375 11C14.4375 12.8948 12.8948 14.4375 11 14.4375Z\" fill=\"white\"/>" +
      "<path d=\"M16.9125 5.82038C17.3173 5.82038 17.6454 5.49227 17.6454 5.08751C17.6454 4.68276 17.3173 4.35464 16.9125 4.35464C16.5077 4.35464 16.1796 4.68276 16.1796 5.08751C16.1796 5.49227 16.5077 5.82038 16.9125 5.82038Z\" fill=\"white\"/>" +
      "</svg>",
    "url": "https://www.instagram.com/timmichi/?hl=en"
  },
  {
    "svg": "<svg width=\"35\" height=\"35\" viewBox=\"0 0 22 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">" +
      "<rect x=\"3.26501\" y=\"3.05556\" width=\"15.8889\" height=\"15.8889\" rx=\"2\" fill=\"white\"/>" +
      "<path d=\"M11 0C4.93488 0 0 4.93488 0 11C0 17.0651 4.93488 22 11 22C17.0651 22 22 17.0651 22 11C22 4.93488 17.0651 0 11 0ZM16.0463 15.8785C15.9115 16.0696 15.6997 16.1714 15.4839 16.1714C15.3464 16.1714 15.2089 16.1315 15.0892 16.0463C12.5111 14.234 8.2225 14.1336 5.32675 14.8088C4.95963 14.8954 4.587 14.6644 4.50175 14.2945C4.4165 13.9246 4.64475 13.5548 5.016 13.4681C8.19913 12.7311 12.9566 12.8659 15.8785 14.9215C16.1893 15.1401 16.2635 15.5678 16.0463 15.8785ZM17.3882 13.1959C17.2535 13.3829 17.0431 13.4819 16.83 13.4819C16.6897 13.4819 16.5509 13.4406 16.4285 13.3526C13.4379 11.2063 9.76388 10.6727 4.86063 11.6737C4.49075 11.7466 4.125 11.5101 4.04937 11.1375C3.97237 10.7663 4.213 10.4019 4.58425 10.3263C9.88763 9.24413 13.9054 9.84912 17.2301 12.2347C17.5381 12.4575 17.6096 12.8865 17.3882 13.1959ZM18.744 9.59338C18.6106 9.79 18.3934 9.8945 18.1748 9.8945C18.0414 9.8945 17.9066 9.856 17.7884 9.77625C13.9975 7.20363 8.23488 7.19125 4.5045 8.51125C4.147 8.635 3.75375 8.44937 3.62725 8.0905C3.50075 7.733 3.68775 7.33975 4.04663 7.21325C8.10425 5.77912 14.3921 5.80938 18.5625 8.63775C18.876 8.85088 18.9557 9.2785 18.744 9.59338Z\" fill=\"black\"/>" +
      "</svg>",
    "url": "https://open.spotify.com/user/timfsim?si=z-ox-7bKT0iaihPk1bvHWg"
  },
]




//adding links to html 
class ListTransformer {
  constructor(linkArray, type, url) {
    this.links = linkArray
    this.type = type
    this.url = url
  }

  async element(element) {
    let x;
    for (x = 0; x < this.links.length; x++) {
      element.append("<a href=" + this.links[x][this.url] + " target=\"_blank\"" + ">" + this.links[x][this.type] + "</a>", { html: true });
    }
  }
}

class RemoveTransformer {
  constructor(obj) {
    this.obj = obj
  }

  async element(element) {
    element.removeAttribute(this.obj)
  }
}

class SetTransformer {
  constructor(elementName, img) {
    this.elementName = elementName
    this.img = img
  }

  async element(element) {
    element.setAttribute(this.elementName, this.img)
  }
}

class SetInnerContent {
  constructor(inner) {
    this.inner = inner
  }

  async element(element) {
    element.setInnerContent(this.inner)
  }
}



//modifies HTML 
const rewriter = new HTMLRewriter()
  .on("div#profile", new RemoveTransformer("style"))
  .on("div#social", new RemoveTransformer("style"))
  .on("div#links", new ListTransformer(linkArray, "name", "url"))
  .on("div#social", new ListTransformer(socialArray, "svg", "url"))
  .on("img#avatar", new SetTransformer("src", "http://github.com/Timmichi.png"))
  .on("title", new SetInnerContent("Timothy's Links"))
  .on("body", new SetTransformer("class", "bg-green-600"))


//listener and handler 
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  if (request.url.endsWith("/links")) {
    const json = JSON.stringify(linkArray)
    const init = {
      headers: { "content-type": "application/json" }
    }
    return new Response(json, init)
  }
  else {
    const staticLink = "https://static-links-page.signalnerve.workers.dev"
    const init = { headers: { "content-type": "text/html", } }
    const response = await fetch(staticLink, init)
    return rewriter.transform(response)
  }
}




