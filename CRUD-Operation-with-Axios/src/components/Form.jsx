import { usePostForm } from '../hooks/usePostForm';

export const Form = (props) => {
    const { addData, isEmpty, handleInputChange, handleFormSubmit } =
        usePostForm(props);

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor="title"></label>
                <input
                    type="text"
                    autoComplete="off"
                    id="title"
                    name="title"
                    placeholder="Add Title"
                    value={addData.title}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label htmlFor="body"></label>
                <input
                    type="text"
                    autoComplete="off"
                    placeholder="Add Post"
                    id="body"
                    name="body"
                    value={addData.body}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit" value={isEmpty ? 'Add' : 'Edit'}>
                {isEmpty ? 'Add' : 'Edit'}
            </button>
        </form>
    );
};