import React,{Fragment} from 'react'
export const Repos=({repos})=>(<Fragment>
   { repos.map((repo)=>(

    <div className="card mb-3" key={repo.id}>
    <div className="card-body">
    <h5><a href={repo.html_url}
    rel="noopener noreferrer"
   target="_blank"
    >{repo.name}{console.log(repo.html_url)}</a></h5></div></div>
))}
    </Fragment>)