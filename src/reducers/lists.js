import {
  CREATE_LIST, DELETE_LIST,CREATE_CARD,DELETE_CARD,ADD_COMMENT
} from '../constants'

// const initialState = [{
//       listId:1,
//       cards:[
//         {
//           cardId: "C11",
//           cardDesc:"Happy Birthday",
//           comments:[
//                 {
//                     commentId: 111,
//                     commentDesc:"Wish you happy day",
//                     commentedDate:"28/01/2017 23:00:00"
//                 }
//             ]
//         }
//       ]
// }]

export default function lists(state = [], action) {
  switch (action.type) {

    case CREATE_LIST:
    
      return [
        {
          listId: state.length + 1,
          cards:[]
        },
        ...state
      ]

    case DELETE_LIST:
      return state.filter((list)=>list.listId!=action.listId);

    case CREATE_CARD:

    let currentList = state.filter((list)=>list.listId==action.listId);

    return state.map((list)=>{
      if(list.listId==action.listId){

        return Object.assign({},list,{
          cards:[
            {
              cardId: "C"+list.listId+(currentList[0].cards.length+1),
              cardDesc:action.cardDesc,
              comments:[]
            },
            ...currentList[0].cards
          ]
        })
      }
      else{
        return list
      }
    })
    
    case DELETE_CARD:
    
      return state.map((list)=>{
        if(list.listId==action.listId){
          
          return Object.assign({},list,{
            cards:list.cards.filter((card)=>card.cardId!=action.cardId)
          })
        }
        else{
          return list
        }
      })

    case ADD_COMMENT:

    let curList = state.filter((list)=>list.listId==action.listId);

    return state.map((list)=>{

      if(list.listId==action.listId){
        let currentCard = list.cards.filter((card)=>card.cardId==action.cardId);

        let allCards = list.cards.map((card)=>{
            if(card.cardId==action.cardId){
                return Object.assign({},card,{
                      comments:[{
                                  commentId: "C"+list.listId+(curList[0].cards.length+1)+"F"+(currentCard[0].comments.length+1),
                                  commentDesc:action.cmtDesc,
                                  commentedDate:action.cmtdDate
                                },
                                ...currentCard[0].comments
                      ]
                  })
            }
            else{
                return card
            }

        })

        return Object.assign({},list,{
          cards:allCards
        })
      }
      else{
        return list
      }
    })

    default:
      return state;
  }
}