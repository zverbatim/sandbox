package bookmarks;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Collection;

/**
 * roughly the query
 * SELECT b from Bookmark b WHERE b.account.username = :username
 *
 */
public interface BookmarkRepository extends JpaRepository<Bookmark, Long> {
    Collection<Bookmark> findByAccountUsername(String username);
}