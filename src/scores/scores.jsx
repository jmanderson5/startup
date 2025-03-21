import React from 'react';
import './scores.css';

export function Scores() {
  return (
    <main className="container-fluid bg-secondary text-center">
            <table className="table table-striped-columns">
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Score</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>John Hamilton</td>
                        <td>25</td>
                        <td>December 2, 2024</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jamin Anderson</td>
                        <td>23</td>
                        <td>Februrary 15, 2025</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Ada Gunther</td>
                        <td>13</td>
                        <td>April 7, 2024</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Hannah Smith</td>
                        <td>7</td>
                        <td>September 5, 2024</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Tim Hardy</td>
                        <td>5</td>
                        <td>June 17, 2024</td>
                    </tr>
                </tbody>
            </table>
        </main>
  );
}