// import React, { useState } from "react";
// import {
//   DragDropContext,
//   Droppable,
//   Draggable,
//   DropResult,
// } from "react-beautiful-dnd";
// import KanbanColumn from "./KanbanColumn";
// import OpportunityCard from "./OpportunityCard";
// import { Opportunity, KanbanStage } from "../types/crm";
// import { initialData } from "../data/initialData";

// const KanbanBoard = () => {
//   const [data, setData] = useState(initialData);

//   const handleDragEnd = (result: DropResult) => {
//     const { destination, source, draggableId } = result;

//     if (!destination) return;

//     if (
//       destination.droppableId === source.droppableId &&
//       destination.index === source.index
//     ) {
//       return;
//     }

//     const sourceColumn = data.columns[source.droppableId];
//     const destColumn = data.columns[destination.droppableId];
//     const draggedOpportunity = data.opportunities[draggableId];

//     // Update opportunity stage and timestamp
//     const updatedOpportunity = {
//       ...draggedOpportunity,
//       stageId: destination.droppableId,
//       stageHistory: [
//         ...draggedOpportunity.stageHistory,
//         {
//           stage: destination.droppableId,
//           timestamp: new Date().toISOString(),
//           duration: 0,
//         },
//       ],
//     };

//     if (source.droppableId === destination.droppableId) {
//       // Moving within the same column
//       const newOpportunityIds = Array.from(sourceColumn.opportunityIds);
//       newOpportunityIds.splice(source.index, 1);
//       newOpportunityIds.splice(destination.index, 0, draggableId);

//       const newColumn = {
//         ...sourceColumn,
//         opportunityIds: newOpportunityIds,
//       };

//       setData({
//         ...data,
//         columns: {
//           ...data.columns,
//           [newColumn.id]: newColumn,
//         },
//         opportunities: {
//           ...data.opportunities,
//           [draggableId]: updatedOpportunity,
//         },
//       });
//     } else {
//       // Moving to a different column
//       const sourceOpportunityIds = Array.from(sourceColumn.opportunityIds);
//       sourceOpportunityIds.splice(source.index, 1);
//       const newSourceColumn = {
//         ...sourceColumn,
//         opportunityIds: sourceOpportunityIds,
//       };

//       const destOpportunityIds = Array.from(destColumn.opportunityIds);
//       destOpportunityIds.splice(destination.index, 0, draggableId);
//       const newDestColumn = {
//         ...destColumn,
//         opportunityIds: destOpportunityIds,
//       };

//       setData({
//         ...data,
//         columns: {
//           ...data.columns,
//           [newSourceColumn.id]: newSourceColumn,
//           [newDestColumn.id]: newDestColumn,
//         },
//         opportunities: {
//           ...data.opportunities,
//           [draggableId]: updatedOpportunity,
//         },
//       });
//     }
//   };

//   return (
//     <DragDropContext onDragEnd={handleDragEnd}>
//       <div className="flex gap-4 overflow-x-auto pb-4">
//         {data.columnOrder.map((columnId) => {
//           const column = data.columns[columnId];
//           const opportunities = column.opportunityIds.map(
//             (opportunityId) => data.opportunities[opportunityId]
//           );

//           return (
//             <KanbanColumn key={column.id} column={column}>
//               <Droppable droppableId={column.id}>
//                 {(provided, snapshot) => (
//                   <div
//                     {...provided.droppableProps}
//                     ref={provided.innerRef}
//                     className={`min-h-[200px] transition-colors duration-200 ${
//                       snapshot.isDraggingOver ? "bg-blue-100" : ""
//                     }`}>
//                     {opportunities.map((opportunity, index) => (
//                       <Draggable
//                         key={opportunity.id}
//                         draggableId={opportunity.id}
//                         index={index}>
//                         {(provided, snapshot) => (
//                           <div
//                             ref={provided.innerRef}
//                             {...provided.draggableProps}
//                             {...provided.dragHandleProps}
//                             className={`transition-transform duration-200 ${
//                               snapshot.isDragging ? "rotate-3 scale-105" : ""
//                             }`}>
//                             <OpportunityCard
//                               opportunity={opportunity}
//                               isDragging={snapshot.isDragging}
//                             />
//                           </div>
//                         )}
//                       </Draggable>
//                     ))}
//                     {provided.placeholder}
//                   </div>
//                 )}
//               </Droppable>
//             </KanbanColumn>
//           );
//         })}
//       </div>
//     </DragDropContext>
//   );
// };

// export default KanbanBoard;


import React, { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import KanbanColumn from "./KanbanColumn";
import OpportunityCard from "./OpportunityCard";
import { Opportunity, KanbanStage } from "../types/crm";
import { initialData } from "../data/initialData";

const KanbanBoard = () => {
  const [data, setData] = useState(initialData);

  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceColumn = data.columns[source.droppableId];
    const destColumn = data.columns[destination.droppableId];
    const draggedOpportunity = data.opportunities[draggableId];

    // Update opportunity stage and timestamp
    const updatedOpportunity = {
      ...draggedOpportunity,
      stageId: destination.droppableId,
      stageHistory: [
        ...draggedOpportunity.stageHistory,
        {
          stage: destination.droppableId,
          timestamp: new Date().toISOString(),
          duration: 0,
        },
      ],
    };

    if (source.droppableId === destination.droppableId) {
      // Moving within the same column
      const newOpportunityIds = Array.from(sourceColumn.opportunityIds);
      newOpportunityIds.splice(source.index, 1);
      newOpportunityIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...sourceColumn,
        opportunityIds: newOpportunityIds,
      };

      setData({
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
        opportunities: {
          ...data.opportunities,
          [draggableId]: updatedOpportunity,
        },
      });
    } else {
      // Moving to a different column
      const sourceOpportunityIds = Array.from(sourceColumn.opportunityIds);
      sourceOpportunityIds.splice(source.index, 1);
      const newSourceColumn = {
        ...sourceColumn,
        opportunityIds: sourceOpportunityIds,
      };

      const destOpportunityIds = Array.from(destColumn.opportunityIds);
      destOpportunityIds.splice(destination.index, 0, draggableId);
      const newDestColumn = {
        ...destColumn,
        opportunityIds: destOpportunityIds,
      };

      setData({
        ...data,
        columns: {
          ...data.columns,
          [newSourceColumn.id]: newSourceColumn,
          [newDestColumn.id]: newDestColumn,
        },
        opportunities: {
          ...data.opportunities,
          [draggableId]: updatedOpportunity,
        },
      });
    }
  };

  return (
    <div className="h-full bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Sales Pipeline</h1>
        <p className="text-gray-600">Manage your opportunities through each stage</p>
      </div>
      
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex gap-6 overflow-x-auto pb-6 min-h-[calc(100vh-200px)]">
          <div className="flex gap-6 min-w-max">
            {data.columnOrder.map((columnId) => {
              const column = data.columns[columnId];
              const opportunities = column.opportunityIds.map(
                (opportunityId) => data.opportunities[opportunityId]
              );

              return (
                <div key={column.id} className="flex-shrink-0 w-80">
                  <KanbanColumn column={column}>
                    <Droppable droppableId={column.id}>
                      {(provided, snapshot) => (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          className={`
                            min-h-[400px] p-4 rounded-lg transition-all duration-300 ease-in-out
                            ${snapshot.isDraggingOver 
                              ? "bg-gradient-to-b from-blue-50 to-blue-100 border-2 border-blue-300 border-dashed shadow-lg" 
                              : "bg-white/50 backdrop-blur-sm border border-gray-200 shadow-sm"
                            }
                          `}
                        >
                          <div className="space-y-3">
                            {opportunities.map((opportunity, index) => (
                              <Draggable
                                key={opportunity.id}
                                draggableId={opportunity.id}
                                index={index}
                              >
                                {(provided, snapshot) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className={`
                                      transition-all duration-300 ease-in-out
                                      ${snapshot.isDragging 
                                        ? "rotate-2 scale-105 shadow-2xl z-50 ring-2 ring-blue-400 ring-opacity-60" 
                                        : "hover:scale-102 hover:shadow-md"
                                      }
                                    `}
                                    style={{
                                      ...provided.draggableProps.style,
                                      transform: snapshot.isDragging 
                                        ? `${provided.draggableProps.style?.transform} rotate(2deg)` 
                                        : provided.draggableProps.style?.transform,
                                    }}
                                  >
                                    <OpportunityCard
                                      opportunity={opportunity}
                                      isDragging={snapshot.isDragging}
                                    />
                                  </div>
                                )}
                              </Draggable>
                            ))}
                            {provided.placeholder}
                          </div>
                          
                          {/* Empty state */}
                          {opportunities.length === 0 && !snapshot.isDraggingOver && (
                            <div className="flex items-center justify-center h-32 text-gray-400 text-sm">
                              <div className="text-center">
                                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gray-100 flex items-center justify-center">
                                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                  </svg>
                                </div>
                                <p>No opportunities</p>
                                <p className="text-xs">Drop cards here</p>
                              </div>
                            </div>
                          )}
                          
                          {/* Drag over indicator */}
                          {snapshot.isDraggingOver && opportunities.length === 0 && (
                            <div className="flex items-center justify-center h-32 text-blue-500 text-sm animate-pulse">
                              <div className="text-center">
                                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-blue-100 flex items-center justify-center">
                                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                  </svg>
                                </div>
                                <p className="font-medium">Drop here</p>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </Droppable>
                  </KanbanColumn>
                </div>
              );
            })}
          </div>
        </div>
      </DragDropContext>
      
      {/* Scroll indicator */}
      <div className="flex justify-center mt-4">
        <div className="flex space-x-2">
          {data.columnOrder.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-gray-300 opacity-50"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;