import React from "react";
import "../styles/MyProjects.css";
import "../styles/Sections.css";

function MyProjects() {
  return (
    <div>
      <section id="my-projects-section">
        <h2>My Projects</h2>
        <table>
          <thead>
            <tr>
              <th>
                <h4>Calculator</h4>
              </th>
              <th>
                <h4>Text Editor</h4>
              </th>
              <th>
                <h4>Temperature Converter</h4>
              </th>
              <th>
                <h4>IMDB Movie Review Sentiment Analysis</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <iframe
                  src="https://www.youtube.com/embed/gQLjqpoyRBY"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </td>
              <td>
                <iframe
                  src="https://www.youtube.com/embed/5ufd1R4pzlI"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </td>
              <td>
                <iframe
                  src="https://www.youtube.com/embed/Z-a59PsQVXY"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </td>
              <td>
                <a
                  href="https://github.com/Mjturn/MovieReviewSentimentAnalysis"
                  target="_blank"
                >
                  Code
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://github.com/Mjturn/Calculator" target="_blank">
                  Code
                </a>
              </td>
              <td>
                <a href="https://github.com/Mjturn/Text-Editor" target="_blank">
                  Code
                </a>
              </td>
              <td>
                <a
                  href="https://github.com/Mjturn/TemperatureConverter"
                  target="_blank"
                >
                  Code
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default MyProjects;
