import type { Work } from './works';
import { tags_table } from "./works";;

export default async function Card(props: Work) {
  return (
    <a>
    <article className='max-w-sm rounded overflow-hidden shadow-lg'>
      {props.images[0] ? 
        <img className="w-full" src={`/image/works/${props.images[0]}`} alt={props.images[0]} /> :
        <div className="table [aspect-ratio:16/9] w-full h-auto text-center border"><p className="text-gray-300 table-cell align-middle">No Image</p></div>}
      <div className="px-6 py-4">
        <p className="text-right text-gray-500 text-xs float-right">{props.year}</p>
        <div className="font-bold text-xl mb-2">{props.name}</div>
        <p className="text-gray-700 text-base">{props.description.split("\n").join(" ")}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {props.tags.map((tag, index) => {
          if(!tags_table[tag as keyof typeof tags_table]) return false;
          return (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tags_table[tag]}</span>
          )
        })}
      </div>
    </article>
    </a>
  );
}
