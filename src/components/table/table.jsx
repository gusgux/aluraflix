import "./table.css";
const Table = ({ head, body }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    {head.map((title, i) => {
                        return (
                            <th
                                className="table-th"
                                key={i}
                            >
                                {title}
                            </th>
                        );
                    })}
                </tr>
            </thead>

            <tbody>
                {body.map((tech, i) => {
                    return (
                        <tr key={i}>
                            <td className="table-td">{tech.name}</td>
                            <td className="table-td">{tech.descripcion}</td>
                            <td className="table-td">{tech.editar}</td>
                            <td className="table-td">{tech.eliminar}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;

/* import "./table.css";

const Table = ({ head, body }) => {
    return (
        <div className="table">
            {head.map((title, i) => {
                return (
                    <div
                        className="table-th"
                        key={i}
                    >
                        {title}
                    </div>
                );
            })}

            {body.map((tech, i) => {
                return tech.map((value, x) => {
                    return (
                        <div
                            className="table-td"
                            key={`key-${i}-${x}`}
                        >
                            {value}
                        </div>
                    );
                });
            })}
        </div>
    );
};

export default Table; */
