import Button from "./Button"
export default function NoProjectSelected({onAddProject}) {
    return (
        <div className="w-2/3 text-center mt-24">
            <img/>
            <h2 className="font-bold text-xl text-stone-500 my-4">No Project Selected!</h2>
            <p className="text-stone-400 mb-4">Select a project to get started</p>
            <p className="mt-8">
                <Button onClick={onAddProject}>Create New Project</Button>
            </p>
        </div>
    )
}   