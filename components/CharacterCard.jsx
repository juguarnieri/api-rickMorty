import styles from "../styles/CharacterCrad.module.css"; 

export default function CharacterCard({ character, onClick }) {
    return (
        <div className={styles.card} onClick={onClick}>
            <img src={character.image} alt={character.name} className={styles.avatar} />
            <h3 className={styles.title}>{character.name}</h3>
            <ul className={styles.list}>
                <li>Status: {character.status}</li>
                <li>Espécie: {character.species}</li>
                <li>Tipo: {character.type || "Sem tipo"}</li>
                <li>Gênero: {character.gender}</li>
                <li>Localização: {character.location.name}</li>
                <li>Origem: {character.origin.name}</li>
                <li>Episódios: {character.episode.length}</li>
            </ul>
        </div>
    );
}